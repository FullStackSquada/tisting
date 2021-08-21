const express = require("express");

const cartRouter = express.Router();

const { addToCart, getProduct, deleteProduct } = require("../controllers/cart");
const authentication = require("../../routers/middlewares/authentication");

cartRouter.post("/", authentication, addToCart);
cartRouter.get("/", authentication, getProduct);
cartRouter.put("/", authentication, deleteProduct);

module.exports = cartRouter;
