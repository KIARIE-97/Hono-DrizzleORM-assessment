// userRelation.router.ts
import { Hono } from 'hono';
import { listUsersWithcommentS, listUsersWithAddress, listUsersWithdriver, listUsersWithOrders, listSingleuserWithdrivers } from './userrelations.controller';
import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../../middlewares/bearAuth";

export const userRelationRouter = new Hono();

userRelationRouter.get("/usercommentrelations", adminRoleAuth, listUsersWithcommentS);
userRelationRouter.get("/useraddressrelations", adminRoleAuth, listUsersWithAddress);
userRelationRouter.get("/userorderrelations",  listUsersWithOrders);
userRelationRouter.get("/userdriverrelations", adminRoleAuth, listUsersWithdriver);
userRelationRouter.get("/singleuserdriversrelations/:id", adminUserRoleAuth, listSingleuserWithdrivers);


