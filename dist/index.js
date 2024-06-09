"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const userrelation_router_1 = require("./userRelations/userrelation.router");
const app = new hono_1.Hono();
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
// app.get('/me', (c) => {
//   return c.text('TECHLADS😊❤️')
// })
app.notFound((c) => {
    return c.text('route not found!😶‍🌫️👽');
});
//custom route
// app.route( "/", userRouter)
// app.route( "/", stateRouter)
// app.route( "/", driverRouter)
// app.route( "/", cityRouter)
// app.route( "/", addressRouter)
// app.route( "/", restaurantsRouter)
// app.route( "/", restaurantownersRouter)
// app.route( "/", menuItemRouter)
// app.route( "/", categoryRouter)
// app.route( "/", orderMenuItemRouter)
// app.route( "/", commentRouter)
// app.route( "/", statusCatalogRouter)
// app.route( "/", ordersRouter)
// app.route( "/", orderStatusRouter)
app.route("/", userrelation_router_1.userRelationRouter);
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT) || 3000
});
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
