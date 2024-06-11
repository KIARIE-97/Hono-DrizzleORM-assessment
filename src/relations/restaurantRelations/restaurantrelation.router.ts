// userRelation.router.ts
import { Hono } from 'hono';
import { listRestaurantWithcity, listRestauranWithmenuitems, listRestauranWithOrders } from './restaurantrelation.controller';

export const restaurantRelationRouter = new Hono();

restaurantRelationRouter.get("/restaurantcityrelations", listRestaurantWithcity);
restaurantRelationRouter.get("/restaurantmenurelations", listRestauranWithmenuitems);
restaurantRelationRouter.get("/restaurantorderrelations", listRestauranWithOrders);


