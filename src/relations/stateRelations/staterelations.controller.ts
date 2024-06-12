import { Context } from "hono";
import { getstateWithcityService, getsinglestateWithcityService } from "./staterelation.service";

export const liststateWithcity = async (c: Context) => {
    const data = await getstateWithcityService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

export const listSingleStateWithcity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const state = await getsinglestateWithcityService(id);
    if (state == undefined){
        return c.text("user not found!👽", 404);
    }
    return c.json(state, 200);
} 