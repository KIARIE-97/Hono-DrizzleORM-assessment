"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status_catalogRelations = exports.order_statusRelations = exports.driverRelations = exports.stateRelations = exports.cityRelations = exports.order_menu_itemRelations = exports.categoryRelations = exports.menu_itemRelations = exports.restaurant_ownerRelations = exports.restaurantRelations = exports.ordersRelations = exports.addressRelations = exports.commentRelations = exports.userRelations = exports.AuthOnUsersRelations = exports.AuthOnUsersTable = exports.roleEnum = exports.restaurant_ownerTable = exports.usersTable = exports.status_catalogTable = exports.stateTable = exports.restaurantTable = exports.ordersTable = exports.order_statusTable = exports.order_menu_itemTable = exports.menu_itemTable = exports.driverTable = exports.commentTable = exports.cityTable = exports.categoryTable = exports.addressTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.addressTable = (0, pg_core_1.pgTable)('address', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    street_address_1: (0, pg_core_1.varchar)("address_1"),
    street_address_2: (0, pg_core_1.varchar)("address_2"),
    zip_code: (0, pg_core_1.varchar)("zip_code"),
    delivery_instructions: (0, pg_core_1.varchar)("delivery_instructions"),
    created_at: (0, pg_core_1.date)("created_at"),
    updated_at: (0, pg_core_1.date)("updated_at"),
    cityId: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.cityTable.id, { onDelete: "cascade" }),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
});
// Define the category table
exports.categoryTable = (0, pg_core_1.pgTable)('category', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
});
// Define the city table
exports.cityTable = (0, pg_core_1.pgTable)('city', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    stateId: (0, pg_core_1.integer)("state_id").notNull().references(() => exports.stateTable.id, { onDelete: "cascade" }),
});
// Define the comment table
exports.commentTable = (0, pg_core_1.pgTable)('comment', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    orderId: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.ordersTable.id, { onDelete: "cascade" }),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
    comment_text: (0, pg_core_1.text)("comment_text"),
    is_complaint: (0, pg_core_1.boolean)("is_complaint"),
    is_praise: (0, pg_core_1.boolean)("is_praise"),
    created_at: (0, pg_core_1.date)("created_at"),
    updated_at: (0, pg_core_1.date)("updated_at"),
});
// Define the driver table
exports.driverTable = (0, pg_core_1.pgTable)('driver', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    car_make: (0, pg_core_1.varchar)("car_make"),
    car_model: (0, pg_core_1.varchar)("car_model"),
    car_year: (0, pg_core_1.integer)("car_year"),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
    online: (0, pg_core_1.boolean)("online"),
    delivering: (0, pg_core_1.boolean)("delivering"),
});
// Define the menu_item table
exports.menu_itemTable = (0, pg_core_1.pgTable)('menu_item', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    restaurantId: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.id, { onDelete: "cascade" }),
    categoryId: (0, pg_core_1.integer)("category_id").notNull().references(() => exports.categoryTable.id, { onDelete: "cascade" }),
    description: (0, pg_core_1.varchar)("description"),
    ingredients: (0, pg_core_1.varchar)("ingredients"),
    price: (0, pg_core_1.decimal)("price"),
    active: (0, pg_core_1.boolean)("active"),
    created_at: (0, pg_core_1.date)("created_at"),
    updated_at: (0, pg_core_1.date)("updated_at"),
});
// Define the order_menu_item table
exports.order_menu_itemTable = (0, pg_core_1.pgTable)('order_menu_item', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    orderId: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.ordersTable.id, { onDelete: "cascade" }),
    menuItemId: (0, pg_core_1.integer)("menu_item_id").notNull().references(() => exports.menu_itemTable.id, { onDelete: "cascade" }),
    quantity: (0, pg_core_1.integer)("quantity"),
    item_price: (0, pg_core_1.decimal)("item_price"),
    price: (0, pg_core_1.decimal)("price"),
    comment: (0, pg_core_1.varchar)("comment"),
});
// Define the order_status table
exports.order_statusTable = (0, pg_core_1.pgTable)('order_status', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    orderId: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.ordersTable.id, { onDelete: "cascade" }),
    statusCatalogId: (0, pg_core_1.integer)("status_catalog_id").notNull().references(() => exports.status_catalogTable.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.date)("created_at"),
});
// Define the orders table
exports.ordersTable = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    estimated_delivery_time: (0, pg_core_1.date)("estimated_delivery_time"),
    actual_delivery_time: (0, pg_core_1.date)("actual_delivery_time"),
    restaurantId: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.id, { onDelete: "cascade" }),
    deliveryAddressId: (0, pg_core_1.integer)("delivery_address_id").notNull().references(() => exports.addressTable.id, { onDelete: "cascade" }),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
    driverId: (0, pg_core_1.integer)("driver_id").notNull().references(() => exports.driverTable.id, { onDelete: "cascade" }),
    price: (0, pg_core_1.decimal)("price"),
    discount: (0, pg_core_1.decimal)("discount"),
    final_price: (0, pg_core_1.decimal)("final_price"),
    comment: (0, pg_core_1.varchar)("comment"),
    created_at: (0, pg_core_1.date)("created_at"),
    updated_at: (0, pg_core_1.date)("updated_at"),
});
// Define the restaurant table
exports.restaurantTable = (0, pg_core_1.pgTable)('restaurant', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    street_address: (0, pg_core_1.varchar)("street_address"),
    zip_code: (0, pg_core_1.varchar)("zip_code"),
    cityId: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.cityTable.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.date)("created_at"),
    updated_at: (0, pg_core_1.date)("updated_at"),
});
// Define the state table
exports.stateTable = (0, pg_core_1.pgTable)('state', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    code: (0, pg_core_1.varchar)("code"),
});
// Define the status_catalog table
exports.status_catalogTable = (0, pg_core_1.pgTable)('status_catalog', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
});
// Define the users table
exports.usersTable = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    contact_phone: (0, pg_core_1.varchar)("contact_phone"),
    phone_verified: (0, pg_core_1.boolean)("phone_verified"),
    email: (0, pg_core_1.varchar)("email"),
    email_verified: (0, pg_core_1.boolean)("email_verified"),
    confirmation_code: (0, pg_core_1.varchar)("confirmation_code"),
    password: (0, pg_core_1.varchar)("password"),
    // created_at: date("created_at"),
    // updated_at: date("updated_at"),
});
// Define the restaurant_owner table
exports.restaurant_ownerTable = (0, pg_core_1.pgTable)('restaurant_owner', {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurantId: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.id, { onDelete: "cascade" }),
    ownerId: (0, pg_core_1.integer)("owner_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
});
// Define the role enum
exports.roleEnum = (0, pg_core_1.pgEnum)("role", ["admin", "user"]);
// Define the auth_on_users table
exports.AuthOnUsersTable = (0, pg_core_1.pgTable)("auth_on_users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.usersTable.id, { onDelete: "cascade" }),
    password: (0, pg_core_1.varchar)("password", { length: 100 }),
    username: (0, pg_core_1.varchar)("username", { length: 100 }),
    role: (0, exports.roleEnum)("role").default("user")
});
exports.AuthOnUsersRelations = (0, drizzle_orm_1.relations)(exports.AuthOnUsersTable, ({ one }) => ({
    user: one(exports.usersTable, {
        fields: [exports.AuthOnUsersTable.userId],
        references: [exports.usersTable.id]
    })
}));
//relations
//user relations
exports.userRelations = (0, drizzle_orm_1.relations)(exports.usersTable, ({ many }) => ({
    comment: many(exports.commentTable),
    address: many(exports.addressTable),
    orders: many(exports.ordersTable),
    driver: many(exports.driverTable),
    restaurant_owner: many(exports.restaurant_ownerTable)
}));
//   comment relations
exports.commentRelations = (0, drizzle_orm_1.relations)(exports.commentTable, ({ one }) => ({
    user: one(exports.usersTable, {
        fields: [exports.commentTable.userId],
        references: [exports.usersTable.id]
    }),
    orders: one(exports.ordersTable, {
        fields: [exports.commentTable.orderId],
        references: [exports.ordersTable.id]
    })
}));
//address relations
exports.addressRelations = (0, drizzle_orm_1.relations)(exports.addressTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.addressTable.userId],
        references: [exports.usersTable.id]
    }),
    city: one(exports.cityTable, {
        fields: [exports.addressTable.userId],
        references: [exports.cityTable.id]
    }),
    orders: many(exports.ordersTable),
}));
//orders relations
exports.ordersRelations = (0, drizzle_orm_1.relations)(exports.ordersTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.ordersTable.userId],
        references: [exports.usersTable.id]
    }),
    driver: one(exports.driverTable, {
        fields: [exports.ordersTable.driverId],
        references: [exports.driverTable.id]
    }),
    restaurant: one(exports.restaurantTable, {
        fields: [exports.ordersTable.restaurantId],
        references: [exports.restaurantTable.id]
    }),
    address: one(exports.addressTable, {
        fields: [exports.ordersTable.deliveryAddressId],
        references: [exports.addressTable.id]
    }),
    order_status: many(exports.order_statusTable),
    comments: many(exports.commentTable),
    order_menu_item: many(exports.order_menu_itemTable)
}));
//restaurant relations
exports.restaurantRelations = (0, drizzle_orm_1.relations)(exports.restaurantTable, ({ one, many }) => ({
    city: one(exports.cityTable, {
        fields: [exports.restaurantTable.cityId],
        references: [exports.cityTable.id]
    }),
    menu_item: many(exports.menu_itemTable),
    orders: many(exports.ordersTable),
    restaurant_owner: many(exports.restaurant_ownerTable)
}));
//restaurant owner relations
exports.restaurant_ownerRelations = (0, drizzle_orm_1.relations)(exports.restaurant_ownerTable, ({ one }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.restaurant_ownerTable.restaurantId],
        references: [exports.restaurantTable.id]
    }),
    user: one(exports.usersTable, {
        fields: [exports.restaurant_ownerTable.ownerId],
        references: [exports.usersTable.id]
    })
}));
//menu items relations
exports.menu_itemRelations = (0, drizzle_orm_1.relations)(exports.menu_itemTable, ({ one, many }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.menu_itemTable.restaurantId],
        references: [exports.restaurantTable.id]
    }),
    category: one(exports.categoryTable, {
        fields: [exports.menu_itemTable.categoryId],
        references: [exports.categoryTable.id]
    }),
    order_menu_item: many(exports.order_menu_itemTable)
}));
//category relations
exports.categoryRelations = (0, drizzle_orm_1.relations)(exports.categoryTable, ({ many }) => ({
    menu_item: many(exports.menu_itemTable)
}));
//order menu item relations
exports.order_menu_itemRelations = (0, drizzle_orm_1.relations)(exports.order_menu_itemTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.order_menu_itemTable.orderId],
        references: [exports.ordersTable.id]
    }),
    menu_item: one(exports.menu_itemTable, {
        fields: [exports.order_menu_itemTable.menuItemId],
        references: [exports.menu_itemTable.id]
    })
}));
//city relations
exports.cityRelations = (0, drizzle_orm_1.relations)(exports.cityTable, ({ one, many }) => ({
    state: one(exports.stateTable, {
        fields: [exports.cityTable.stateId],
        references: [exports.stateTable.id]
    }),
    restaurant: many(exports.restaurantTable),
    address: many(exports.addressTable)
}));
//state relations
exports.stateRelations = (0, drizzle_orm_1.relations)(exports.stateTable, ({ many }) => ({
    city: many(exports.cityTable)
}));
//driver relations
exports.driverRelations = (0, drizzle_orm_1.relations)(exports.driverTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.driverTable.userId],
        references: [exports.usersTable.id]
    }),
    orders: many(exports.ordersTable)
}));
//order status relations
exports.order_statusRelations = (0, drizzle_orm_1.relations)(exports.order_statusTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.order_statusTable.orderId],
        references: [exports.ordersTable.id]
    }),
    status_catalog: one(exports.status_catalogTable, {
        fields: [exports.order_statusTable.statusCatalogId],
        references: [exports.status_catalogTable.id]
    })
}));
//status catalog relations
exports.status_catalogRelations = (0, drizzle_orm_1.relations)(exports.status_catalogTable, ({ many }) => ({
    order_status: many(exports.order_statusTable)
}));
//
