import { Context } from 'hono'
import { createAuthUserService, userLoginService } from './auth.service';
import bcrypt from 'bcrypt';
import { sign } from 'hono/jwt';
import "dotenv/config"
import mailFunction from '../../email_functionality/email';
// import purpleGlass from './purple glass.jpg';



export const registerUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await createAuthUserService(user);
if (!createdUser) return c.text("User not created", 404);

// send email to user
if (!user.email) {
    throw new Error("Email field is missing in the user data");
  }

  // Send welcome email after successful user creation
  const subject = "hello, welcome to my restaurant API";
  const html = `
  <html>
    <head>
      <style>
        /* Inline CSS for basic styling */
        .email-container {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 5px;
        }
        .btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 3px;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <p>Hello, ${user.username}</p>
        <p>Thank you for choosing to be part of us✨</p>
        <p>your best restaurant API companion</p>

        // <img src="https://wallpapercave.com/wp/wp12956321.jpg" alt="Image" style="max-width: 100%; height: auto;">
        <a class="btn" href="https://myrestaurant.azurewebsites.net/">visit us</a>
      </div>
    </body>
  </html>
`;


     // Send welcome email after successful user creation
     await mailFunction(user.email, subject, html);

     return c.json({ msg: "User registered successfully", user: createdUser }, 201);
 } catch (error: any) {
     console.error('Error during registration:', error);

        return c.json({ error: error?.message }, 400)
    }
}



export const loginUser = async (c: Context) => {

  try {
      const user = await c.req.json();
      //check user exist
      const userExist = await userLoginService(user);
      if (userExist === null) return c.json({ error: "User not found" }, 404);  // not found         
      const userMatch = await bcrypt.compare(user.password, userExist?.password as string);
      if (!userMatch) {
          return c.json({ error: "Invalid credentials" }, 401);  // unauthorized
      } else {
          // create a payload
          const payload = {
              sub: userExist?.username,
              role: userExist?.role,
              exp: Math.floor(Date.now() / 1000) + (60 * 180)  // 3 hour  => SESSION EXPIRATION
          }
          let secret = process.env.JWT_SECRET as string;  // secret key
          const token = await sign(payload, secret);   // create a JWT token
          let user = userExist?.user;
          let role = userExist?.role;
          return c.json({ token, user: { role, ...user } }, 200);  // return token and user details
      }
  } catch (error: any) {
      return c.json({ error: error?.message }, 400)
  }

}


