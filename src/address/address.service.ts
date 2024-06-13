import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIAddress, TSAddress, SimpleAddress, addressTable} from "../drizzle/schema";

//get all address
export const addressService = async (): Promise<SimpleAddress[] | null> => {
    return await db.query.addressTable.findMany({
        columns: {
            street_address_1: true,
            street_address_2: true,
            zip_code: true
        }
    })
}
//get single address
export const getAddressService = async (id: number): Promise<SimpleAddress | undefined> => {
    return await db.query.addressTable.findFirst({
        columns: {
                    street_address_1: true,
                    street_address_2: true,
                    zip_code: true
                },
        where: eq(addressTable.id, id)
    })
}
//create address
export const createAddressService = async (address: TIAddress): Promise<TIAddress> => {
    await db.insert(addressTable).values(address)
    return address;

}
//update address
export const updateAddressService = async (id: number, address: TIAddress): Promise<TIAddress> => {

    await db.update(addressTable).set(address).where(eq(addressTable.id, id))
    return address;
}
//delete address
export const deleteAddressService = async (id: number) => {
    await db.delete(addressTable).where(eq(addressTable.id, id))
    return "address deleted successfully!😑"
}