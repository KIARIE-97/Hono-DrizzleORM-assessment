import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import{ userRouter } from './users/user.router'
import db from "./drizzle/db";
import { usersTable, commentTable, categoryTable } from "./drizzle/schema";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// app.get('/me', (c) => {
//   return c.text('TECHLADS😊❤️')
// })

app.notFound((c) => {
  return c.text('route not found!😶‍🌫️👽')
})

//drizzle code
const getUsersWithcomment = async () => {
  return await db.query.usersTable.findMany({
      with: {
         comment : true
      }
  })
}
const getUsersWithAddress = async () => {
  return await db.query.usersTable.findMany({
      with: {
         address : true
      }
  })
}
const getUsersWithOrders = async () => {
  return await db.query.usersTable.findMany({
      with: {
         orders : true
      }
  })
}
async function main () {
  
  // console.log(await getUsersWithcomment());
  // console.log(await getUsersWithAddress());
  // console.log(await getUsersWithOrders());
}
main();

//custom route
app.route( "/", userRouter)

console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) ||3000
})
