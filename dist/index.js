"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const user_router_1 = require("./users/user.router");
const state_router_1 = require("./state/state.router");
const driver_router_1 = require("./drivers/driver.router");
const city_router_1 = require("./cities/city.router");
const address_router_1 = require("./address/address.router");
const restaurant_router_1 = require("./restaurants/restaurant.router");
const resowner_router_1 = require("./restaurant owners/resowner.router");
const menuitem_router_1 = require("./menuitems/menuitem.router");
const category_router_1 = require("./categories/category.router");
const orderMI_router_1 = require("./order menuitems/orderMI.router");
const comment_router_1 = require("./comments/comment.router");
const statusC_router_1 = require("./status catalogues/statusC.router");
const order_router_1 = require("./orders/order.router");
const orderS_router_1 = require("./orderStatus/orderS.router");
const userrelation_router_1 = require("./userRelations/userrelation.router");
const auth_router_1 = require("./auth/auth.router");
const app = new hono_1.Hono();
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
exports.default = app;
// app.get('/me', (c) => {
//   return c.text('TECHLADS😊❤️')
// })
app.notFound((c) => {
    return c.text('route not found!😶‍🌫️👽');
});
//custom route
app.route("/", user_router_1.userRouter);
app.route("/", state_router_1.stateRouter);
app.route("/", driver_router_1.driverRouter);
app.route("/", city_router_1.cityRouter);
app.route("/", address_router_1.addressRouter);
app.route("/", restaurant_router_1.restaurantsRouter);
app.route("/", resowner_router_1.restaurantownersRouter);
app.route("/", menuitem_router_1.menuItemRouter);
app.route("/", category_router_1.categoryRouter);
app.route("/", orderMI_router_1.orderMenuItemRouter);
app.route("/", comment_router_1.commentRouter);
app.route("/", statusC_router_1.statusCatalogRouter);
app.route("/", order_router_1.ordersRouter);
app.route("/", orderS_router_1.orderStatusRouter);
app.route("/", userrelation_router_1.userRelationRouter);
app.route("auth/", auth_router_1.authRouter);
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
