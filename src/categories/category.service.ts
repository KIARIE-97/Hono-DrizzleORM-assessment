import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TICategory, TSCategory, categoryTable} from "../drizzle/schema";

export const categoryService = async (): Promise<TSCategory[] | null> => {
    return await db.query.categoryTable.findMany()
}

//get one restaurant
export const getCategoryService = async (id: number): Promise<TICategory | undefined> => {
    return await db.query.categoryTable.findFirst({
        where: eq(categoryTable.id, id) 
    })
}

//create restaurant
export const createCategoryService = async (category: TICategory): Promise<TICategory> => {
    await db.insert(categoryTable).values(category)
    return category;

}
//update restaurant
export const updateCategoryService = async (id: number, category: TICategory): Promise<TICategory> => {

    await db.update(categoryTable).set(category).where(eq(categoryTable.id, id))
    return category;
}
//.delete restaurant
export const deleteCategoryService = async (id: number) => {
    await db.delete(categoryTable).where(eq(categoryTable.id, id))
    return "user deleted successfully!😑"
}