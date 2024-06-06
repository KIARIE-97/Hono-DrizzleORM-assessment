import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import db from "./drizzle/db";
import { usersTable, commentTable, categoryTable } from "./drizzle/schema";


import{ userRouter } from './users/user.router'
import{ stateRouter } from './state/state.router'
import{ driverRouter } from './drivers/driver.router'
import{ cityRouter } from './cities/city.router'

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
  

//custom route
app.route( "/", userRouter)
app.route( "/", stateRouter)
app.route( "/", driverRouter)
app.route( "/", cityRouter)

console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) ||3000
})



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