// userRelation.router.ts
import { Hono } from 'hono';
import { listUsers } from './userrelations.controller';

export const userRelationRouter = new Hono();

userRelationRouter.get('/userrelations/:id', listUsers);


