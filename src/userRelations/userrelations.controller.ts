// userRelation.controller.ts
import { Context } from 'hono';
import { getUsersWithRelations } from './userrelation.service';

export const listUsers = async (c: Context) => {
    try {
        const data = await getUsersWithRelations();

        if (!data || data.length === 0) {
            return c.text("no user found!😶‍🌫️👽", 404);
        }

        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
};

