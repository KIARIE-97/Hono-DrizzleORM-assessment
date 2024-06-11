import { Hono } from 'hono';
import { listOrderssWithcommentS, listOrdersWithAddress, listOrdersWithRestaurant } from './orderrelation.controller';

export const orderRelationRouter = new Hono();

orderRelationRouter.get("/orderscommentrelations", listOrderssWithcommentS);
orderRelationRouter.get("/ordersaddressrelations", listOrdersWithAddress);
orderRelationRouter.get("/orderrestaurantrelations", listOrdersWithRestaurant);