// userRelation.router.ts
import { Hono } from 'hono';
import { listUsersWithcommentS, listUsersWithAddress, listUsersWithdriver, listUsersWithOrders } from './userrelations.controller';

export const userRelationRouter = new Hono();

userRelationRouter.get("/usercommentrelations", listUsersWithcommentS);
userRelationRouter.get("/useraddressrelations", listUsersWithAddress);
userRelationRouter.get("/userorderrelations", listUsersWithOrders);
userRelationRouter.get("/userdriverrelations", listUsersWithdriver);


