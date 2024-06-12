// userRelation.router.ts
import { Hono } from 'hono';
import { liststateWithcity, listSingleStateWithcity } from './staterelations.controller';

export const stateRelationRouter = new Hono();

stateRelationRouter.get("/statecityrelations", liststateWithcity);
stateRelationRouter.get("/statecityrelations/:id", listSingleStateWithcity);