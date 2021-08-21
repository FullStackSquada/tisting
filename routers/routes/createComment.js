const express = require('express');


const createNewCommentRouter = express.Router();

const {createComment,deleteComment} = require("../controllers/createComment")
const authentication = require("../../routers/middlewares/authentication")

createNewCommentRouter.post("/products/:id/comments",authentication,createComment);
createNewCommentRouter.delete("/products/:id/comments/:comment_id",deleteComment)

module.exports = createNewCommentRouter;