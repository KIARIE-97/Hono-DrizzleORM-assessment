"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.createCommentService = exports.getCommentService = exports.commentService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const commentService = async () => {
    return await db_1.default.query.commentTable.findMany();
};
exports.commentService = commentService;
//get one restaurant
const getCommentService = async (id) => {
    return await db_1.default.query.commentTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.commentTable.id, id)
    });
};
exports.getCommentService = getCommentService;
//create restaurant
const createCommentService = async (comment) => {
    await db_1.default.insert(schema_1.commentTable).values(comment);
    return comment;
};
exports.createCommentService = createCommentService;
//update restaurant
const updateCommentService = async (id, comment) => {
    await db_1.default.update(schema_1.commentTable).set(comment).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return comment;
};
exports.updateCommentService = updateCommentService;
//.delete restaurant
const deleteCommentService = async (id) => {
    await db_1.default.delete(schema_1.commentTable).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return "Comment deleted successfully!😑";
};
exports.deleteCommentService = deleteCommentService;
