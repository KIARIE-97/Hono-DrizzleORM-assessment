import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { readFileSync } from 'fs';
// import mailFunction from './email_functionality/email';

// import db from "./drizzle/db";
import { usersTable, commentTable, categoryTable } from "./drizzle/schema";


import{ userRouter } from './users/user.router'
import{ stateRouter } from './state/state.router'
import{ driverRouter } from './drivers/driver.router'
import{ cityRouter } from './cities/city.router'
import{ addressRouter } from './address/address.router'
import{ restaurantsRouter } from './restaurants/restaurant.router'
import{ restaurantownersRouter } from './restaurant owners/resowner.router'
import{ menuItemRouter } from './menuitems/menuitem.router'
import{ categoryRouter } from './categories/category.router'
import{ orderMenuItemRouter } from './order menuitems/orderMI.router'
import{ commentRouter } from './comments/comment.router'
import{ statusCatalogRouter } from './status catalogues/statusC.router'
import{ ordersRouter } from './orders/order.router'
import{ orderStatusRouter } from './orderStatus/orderS.router'
import{ userRelationRouter } from './relations/userRelations/userrelation.router'
import{ orderRelationRouter } from './relations/ordersRelations/orderrelation.router'
import{ restaurantRelationRouter } from './relations/restaurantRelations/restaurantrelation.router'
import{ MenuitemRelationRouter } from './relations/menuitemsrelations/menuI.router'
import{ driverRelationRouter } from './relations/driverrelations/driverrelation.router'
import{ stateRelationRouter } from './relations/stateRelations/staterelations.router'
import{ authRouter } from './auth/authOnUsers/auth.router'



const app = new Hono()

// mailFunction();

app.get('/ok', (c) => {
    return c.text('Hello Hono!')
  })

  export default app;
  


app.get('/', async (c) => {
  try {
    let html = readFileSync('./index.html', 'utf-8');
    return c.html(html);

  } catch (error: any) {
    return c.json({ error: error.message, status: 500 });

  }
});
  
  app.notFound((c) => {
    return c.text('route not found!😶‍🌫️👽')
  })
  

//custom route
app.route( "/", userRouter)
app.route( "/", stateRouter)
app.route( "/", driverRouter)
app.route( "/", cityRouter)
app.route( "/", addressRouter)
app.route( "/", restaurantsRouter)
app.route( "/", restaurantownersRouter)
app.route( "/", menuItemRouter)
app.route( "/", categoryRouter)
app.route( "/", orderMenuItemRouter)
app.route( "/", commentRouter)
app.route( "/", statusCatalogRouter)
app.route( "/", ordersRouter)
app.route( "/", orderStatusRouter)
app.route( "relation/", userRelationRouter)
app.route( "relation/", orderRelationRouter)
app.route( "relation/", restaurantRelationRouter)
app.route( "relation/", MenuitemRelationRouter)
app.route( "relation/", driverRelationRouter)
app.route( "relation/", stateRelationRouter)
app.route( "auth/", authRouter)



serve({
  fetch: app.fetch,
  port: Number(8000)
  })
  
  console.log(`Server is running on port 8000...`)


  // //drizzle code
  // const getUsersWithcomment = async () => {
  //   return await db.query.usersTable.findMany({
  //       with: {
  //          comment : true
  //       }
  //   })
  // }
  // const getUsersWithAddress = async () => {
  //   return await db.query.usersTable.findMany({
  //       with: {
  //          address : true
  //       }
  //   })
  // }
  // const getUsersWithOrders = async () => {
  //   return await db.query.usersTable.findMany({
  //       with: {
  //          orders : true
  //       }
  //   })
  // }
  // async function main () {
    
  //   // console.log(await getUsersWithcomment());
  //   // console.log(await getUsersWithAddress());
  //   // console.log(await getUsersWithOrders());
  // }
  // main();