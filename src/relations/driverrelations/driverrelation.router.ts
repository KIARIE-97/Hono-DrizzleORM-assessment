import { Hono } from 'hono';
import { listdriversWithuser, listdriversWithOrders } from './driverrelation.controller';

export const driverRelationRouter = new Hono();

driverRelationRouter.get("/driverOrderrelations", listdriversWithOrders);
driverRelationRouter.get("/driverUserrelations", listdriversWithuser);
