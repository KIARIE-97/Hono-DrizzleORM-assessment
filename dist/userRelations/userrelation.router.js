"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRelationRouter = void 0;
// userRelation.router.ts
const hono_1 = require("hono");
const userrelations_controller_1 = require("./userrelations.controller");
exports.userRelationRouter = new hono_1.Hono();
exports.userRelationRouter.get('/userrelations/:id', userrelations_controller_1.listUsers);
