// userRelation.router.ts
import { Hono } from 'hono';
import { listMenuitemsWithrestaurant, listMenuitemsWithcategory, listMenuitemsWithOrders } from './menuI.controller';

export const MenuitemRelationRouter = new Hono();

MenuitemRelationRouter.get("/Menuitemrestaurantrelations", listMenuitemsWithrestaurant);
MenuitemRelationRouter.get("/Menuitemcategoryrelations", listMenuitemsWithcategory);
MenuitemRelationRouter.get("/Menuitemorderrelations", listMenuitemsWithOrders);


