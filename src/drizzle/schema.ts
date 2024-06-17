import { primaryKey, pgTable, pgEnum, serial, varchar, text, integer, date, boolean, decimal  } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { profile, table } from "console";
import exp from "constants";



 export const addressTable = pgTable('address', {
  id: serial("id").primaryKey(),
  street_address_1:varchar("address_1"),
  street_address_2: varchar("address_2"),
  zip_code: varchar("zip_code"),
  delivery_instructions: varchar("delivery_instructions"),
  created_at: date("created_at"),
  updated_at: date("updated_at"),
  cityId: integer("city_id").notNull().references(() => cityTable.id, { onDelete: "cascade" }),
  userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
});

// Define the category table
export const categoryTable = pgTable('category', {
    id: serial("id").primaryKey(),
    name: text("name"),
  });
  
  // Define the city table
  export const cityTable = pgTable('city', {
    id: serial("id").primaryKey(),
    name: varchar("name"),
    stateId: integer("state_id").notNull().references(() => stateTable.id, { onDelete: "cascade" }),
  });
  
  // Define the comment table
  export const commentTable = pgTable('comment', {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => ordersTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
    comment_text: text("comment_text"),
    is_complaint: boolean("is_complaint"),
    is_praise: boolean("is_praise"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
  });
  
  // Define the driver table
  export const driverTable = pgTable('driver', {
    id: serial("id").primaryKey(),
    car_make: varchar("car_make"),
    car_model: varchar("car_model"),
    car_year: integer("car_year"),
    userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
    online: boolean("online"),
    delivering: boolean("delivering"),
    
  });
  
  // Define the menu_item table
  export const menu_itemTable = pgTable('menu_item', {
    id: serial("id").primaryKey(),
    name: text("name"),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    categoryId: integer("category_id").notNull().references(() => categoryTable.id, { onDelete: "cascade" }),
    description: varchar("description"),
    ingredients: varchar("ingredients"),
    price: decimal("price"),
    active: boolean("active"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
  });
  
  // Define the order_menu_item table
  export const order_menu_itemTable = pgTable('order_menu_item', {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => ordersTable.id, { onDelete: "cascade" }),
    menuItemId: integer("menu_item_id").notNull().references(() => menu_itemTable.id, { onDelete: "cascade" }),
    quantity: integer("quantity"),
    item_price: decimal("item_price"),
    price: decimal("price"),
    comment: varchar("comment"),
  });
  
  // Define the order_status table
  export const order_statusTable = pgTable('order_status', {
    id: serial("id").primaryKey(),
    orderId: integer("order_id").notNull().references(() => ordersTable.id, { onDelete: "cascade" }),
    statusCatalogId: integer("status_catalog_id").notNull().references(() => status_catalogTable.id, { onDelete: "cascade" }),
    created_at: date("created_at"),
  });
  
  // Define the orders table
  export const ordersTable = pgTable('orders', {
    id: serial("id").primaryKey(),
    estimated_delivery_time: date("estimated_delivery_time"),
    actual_delivery_time: date("actual_delivery_time"),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    deliveryAddressId: integer("delivery_address_id").notNull().references(() => addressTable.id, { onDelete: "cascade" }),
    userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
    driverId: integer("driver_id").notNull().references(() => driverTable.id, { onDelete: "cascade" }),
    price: decimal("price"),
    discount: decimal("discount"),
    final_price: decimal("final_price"),
    comment: varchar("comment"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
  });
  
  // Define the restaurant table
  export const restaurantTable = pgTable('restaurant', {
    id: serial("id").primaryKey(),
    name: text("name"),
    street_address: varchar("street_address"),
    zip_code: varchar("zip_code"),
    cityId: integer("city_id").notNull().references(() => cityTable.id, { onDelete: "cascade" }),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
  });
  
  // Define the state table
  export const stateTable = pgTable('state', {
    id: serial("id").primaryKey(),
    name: varchar("name"),
    code: varchar("code"),
  });
  
  // Define the status_catalog table
  export const status_catalogTable = pgTable('status_catalog', {
    id: serial("id").primaryKey(),
    name: varchar("name"),
  });
  
  // Define the users table
  export const usersTable = pgTable('users', {
    id: serial("id").primaryKey(),
    name: text("name"),
    contact_phone: text("contact_phone"),
    phone_verified: boolean("phone_verified"),
    email: text("email"),
    email_verified: boolean("email_verified"),
    confirmation_code: text("confirmation_code"),
    password: text("password"),
    // created_at: date("created_at"),
    // updated_at: date("updated_at"),
  });
  
  // Define the restaurant_owner table
  export const restaurant_ownerTable = pgTable('restaurant_owner', {
    id: serial("id").primaryKey(),
    restaurantId: integer("restaurant_id").notNull().references(() => restaurantTable.id, { onDelete: "cascade" }),
    ownerId: integer("owner_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  });

// Define the role enum
  export const roleEnum = pgEnum("role", ["admin", "user", "both"])

  // Define the auth_on_users table
  export const AuthOnUsersTable = pgTable("auth_on_users", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
    password: varchar("password", { length: 100 }).notNull().references(() => usersTable.password, { onDelete: "cascade" }),
    username: varchar("username", { length: 100 }),
    role: roleEnum("role").default("user")
});

export const AuthOnUsersRelations = relations(AuthOnUsersTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [AuthOnUsersTable.userId],
        references: [usersTable.id]
    })
}));

  // Define the types
  export type TIAuthOnUser = typeof AuthOnUsersTable.$inferInsert;
export type TSAuthOnUser = typeof AuthOnUsersTable.$inferSelect;

export type TIAddress = typeof addressTable.$inferInsert;
export type TSAddress = typeof addressTable.$inferSelect;
export type SimpleAddress = Pick<TSAddress, 'street_address_1' | 'street_address_2' | 'zip_code'>;

export type TICategory = typeof categoryTable.$inferInsert;
export type TSCategory = typeof categoryTable.$inferSelect;

export type TICity = typeof cityTable.$inferInsert;
export type TSCity = typeof cityTable.$inferSelect;
export type SimpleCity= Pick<TSCity, 'name' >;


export type TIComment = typeof commentTable.$inferInsert;
export type TSComment = typeof commentTable.$inferSelect;
export type simpleComment= Pick<TSComment, 'comment_text' | 'is_complaint' | 'is_praise' >;

export type TIDriver = typeof driverTable.$inferInsert;
export type TSDriver = typeof driverTable.$inferSelect;
export type simpleDriver= Pick<TSDriver, 'car_make' | 'online' | 'delivering' >;

export type TIMenuItem = typeof menu_itemTable.$inferInsert;
export type TSMenuItem = typeof menu_itemTable.$inferSelect;

export type TIOrderMenuItem = typeof order_menu_itemTable.$inferInsert;
export type TSOrderMenuItem = typeof order_menu_itemTable.$inferSelect;

export type TIOrderStatus = typeof order_statusTable.$inferInsert;
export type TSOrderStatus = typeof order_statusTable.$inferSelect;

export type TIOrders = typeof ordersTable.$inferInsert;
export type TSOrders = typeof ordersTable.$inferSelect;
export type simpleOrder= Pick<TSOrders, 'price' | 'discount' | 'final_price' >;

export type TIRestaurant = typeof restaurantTable.$inferInsert;
export type TSRestaurant = typeof restaurantTable.$inferSelect;
export type simpleRestaurant= Pick<TSRestaurant, 'name' >;

export type TIState = typeof stateTable.$inferInsert;
export type TSState = typeof stateTable.$inferSelect;

export type TIStatusCatalog = typeof status_catalogTable.$inferInsert;
export type TSStatusCatalog = typeof status_catalogTable.$inferSelect;
export type SimpleStatusCatalog= Pick<TSStatusCatalog, 'name' >;

export type TIUsers = typeof usersTable.$inferInsert;
export type TSUsers = typeof usersTable.$inferSelect;
export type simpleUsers= Pick<TSUsers, 'name' | 'contact_phone' | 'email' >;

export type TIRestaurantOwner = typeof restaurant_ownerTable.$inferInsert;
export type TSRestaurantOwner = typeof restaurant_ownerTable.$inferSelect;

export type TSUserRelations = {
  comments: TSComment[];
  addresses: TSAddress[];
  orders: TSOrders[];
  drivers: TSDriver[];
  restaurantOwners: TSRestaurantOwner[];
};

  //relations
  //user relations
  export const userRelations = relations(usersTable, ({many}) => ({
    comment: many(commentTable),
    address: many(addressTable),
    orders: many(ordersTable),
    driver: many(driverTable),
    restaurant_owner: many(restaurant_ownerTable)
  }))
  

//   comment relations
  export const commentRelations = relations(commentTable, ({one}) => ({
    user: one(usersTable, {
        fields: [commentTable.userId],
        references: [usersTable.id]
    }),
    orders: one(ordersTable, {
        fields: [commentTable.orderId],
        references: [ordersTable.id]    
    })
}))

//address relations
export const addressRelations = relations(addressTable, ({one, many}) => ({
    user: one(usersTable, {
        fields: [addressTable.userId],
        references: [usersTable.id]
    }),
    city: one(cityTable, {
      fields: [addressTable.userId],
      references: [cityTable.id]
  }),
    orders: many(ordersTable),
    

}))

//orders relations
export const ordersRelations = relations(ordersTable, ({one, many}) => ({
    user: one(usersTable, {
        fields: [ordersTable.userId],
        references: [usersTable.id]
    }),
    driver: one(driverTable, {
        fields: [ordersTable.driverId],
        references: [driverTable.id]
    }),
    restaurant: one(restaurantTable, {
        fields: [ordersTable.restaurantId],
        references: [restaurantTable.id]
    }),
    address: one(addressTable, {
        fields: [ordersTable.deliveryAddressId],
        references: [addressTable.id]
    }),
    order_status: many(order_statusTable),
    comments: many(commentTable),
    order_menu_item: many(order_menu_itemTable)
}))

//restaurant relations
export const restaurantRelations = relations(restaurantTable, ({one, many}) => ({
    city: one(cityTable, {
        fields: [restaurantTable.cityId],
        references: [cityTable.id]
    }),
    menu_item: many(menu_itemTable),
    orders: many(ordersTable),
    restaurant_owner: many(restaurant_ownerTable)
}))

//restaurant owner relations
export const restaurant_ownerRelations = relations(restaurant_ownerTable, ({one}) => ({
    restaurant: one(restaurantTable, {
        fields: [restaurant_ownerTable.restaurantId],
        references: [restaurantTable.id]
    }),
    user: one(usersTable, {
        fields: [restaurant_ownerTable.ownerId],
        references: [usersTable.id]
    })
}))

//menu items relations
export const menu_itemRelations = relations(menu_itemTable, ({one, many}) => ({
    restaurant: one(restaurantTable, {
        fields: [menu_itemTable.restaurantId],
        references: [restaurantTable.id]
    }),
    category: one(categoryTable, {
        fields: [menu_itemTable.categoryId],
        references: [categoryTable.id]
    }),
    order_menu_item: many(order_menu_itemTable)
}))

//category relations
export const categoryRelations = relations(categoryTable, ({many}) => ({
    menu_item: many(menu_itemTable)
}))

//order menu item relations
export const order_menu_itemRelations = relations(order_menu_itemTable, ({one}) => ({
    order: one(ordersTable, {
        fields: [order_menu_itemTable.orderId],
        references: [ordersTable.id]
    }),
    menu_item: one(menu_itemTable, {
        fields: [order_menu_itemTable.menuItemId],
        references: [menu_itemTable.id]
    })
}))

//city relations
export const cityRelations = relations(cityTable, ({one, many}) => ({
    state: one(stateTable, {
        fields: [cityTable.stateId],
        references: [stateTable.id]
    }),
    restaurant: many(restaurantTable),
    address: many(addressTable)
}))

//state relations
export const stateRelations = relations(stateTable, ({many}) => ({
    city: many(cityTable)
}))

//driver relations
export const driverRelations = relations(driverTable, ({one, many}) => ({
    user: one(usersTable, {
        fields: [driverTable.userId],
        references: [usersTable.id]
    }),
    orders: many(ordersTable)
}))

//order status relations
export const order_statusRelations = relations(order_statusTable, ({one}) => ({
    order: one(ordersTable, {
        fields: [order_statusTable.orderId],
        references: [ordersTable.id]
    }),
    status_catalog: one(status_catalogTable, {
        fields: [order_statusTable.statusCatalogId],
        references: [status_catalogTable.id]
    })
}))

//status catalog relations
export const status_catalogRelations = relations(status_catalogTable, ({many}) => ({
    order_status: many(order_statusTable)
}))

//





