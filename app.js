const express = require("express");
const app = express();
const itemsRouter = require("./items/items.router");
const usersRouter = require("./users/users.router");
const cartRouter = require("./cart/cart.router");

app.use(express.json());

app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);
app.use("/api/cart", cartRouter);

module.exports = app;