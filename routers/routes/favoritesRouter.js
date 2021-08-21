const express = require("express");

const favoritesRouter = express.Router();

const {
  addToFavorites,
  getFavorites,
  deleteProduct,
  getIfItInFav
} = require("../controllers/favorites");
const authentication = require("../../routers/middlewares/authentication");

favoritesRouter.post("/", authentication, addToFavorites);
favoritesRouter.get("/", authentication, getFavorites);
favoritesRouter.put("/", authentication, deleteProduct);
favoritesRouter.get("/:productId",authentication,getIfItInFav)

module.exports = favoritesRouter;
