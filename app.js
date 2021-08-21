const express = require("express");
const cors = require("cors");

const app = express();

//routers

const roleRouter = require("./routers/routes/role");
const userRouter = require("./routers/routes/userRouter");
const loginRouter = require("./routers/routes/login");
const productsRouter = require("./routers/routes/product");
const createNewCommentRouter = require("./routers/routes/createComment");
const createRatingRouter = require("./routers/routes/rating");
const favoritesRouter = require("./routers/routes/favoritesRouter");
const cartRouter = require("./routers/routes/cartRouter");
const sliderRouter = require("./routers/routes/sliderRouter");
const orderRouter = require("./routers/routes/order");


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use(roleRouter);
app.use("/user", userRouter);
app.use(loginRouter);
app.use("/products", productsRouter);
app.use(createNewCommentRouter);
app.use("/rating",createRatingRouter);
app.use("/favorites", favoritesRouter);
app.use("/cart", cartRouter);
app.use("/slider", sliderRouter);
app.use("/order",orderRouter)


module.exports = app
