"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getSingleComment = exports.listComment = void 0;
const comment_service_1 = require("./comment.service");
const listComment = async (c) => {
    const data = await (0, comment_service_1.commentService)();
    if (data == null) {
        return c.text("no Comment found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listComment = listComment;
//get single city
const getSingleComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const comment = await (0, comment_service_1.getCommentService)(id);
    if (comment == undefined) {
        return c.text("Comment not found!👽", 404);
    }
    return c.json(comment, 200);
};
exports.getSingleComment = getSingleComment;
//create restaurant
const createComment = async (c) => {
    try {
        const comment = await c.req.json();
        const createdComment = await (0, comment_service_1.createCommentService)(comment);
        if (!createdComment) {
            return c.text("comment not created!👽", 404);
        }
        return c.json({ msg: createdComment }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createComment = createComment;
//update city
const updateComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const comment = await c.req.json();
    try {
        //search for city
        const foundComment = await (0, comment_service_1.getCommentService)(id);
        if (foundComment == undefined)
            return c.text("Comment not found!👽", 404);
        //get the data and update
        const res = await (0, comment_service_1.updateCommentService)(id, comment);
        //return the updated city
        if (!res)
            return c.text("Comment not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateComment = updateComment;
//delete city
const deleteComment = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const comment = await (0, comment_service_1.getCommentService)(id);
        if (comment == undefined)
            return c.text("comment not found!👽", 404);
        const res = await (0, comment_service_1.deleteCommentService)(id);
        if (!res)
            return c.text("Comment not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteComment = deleteComment;
