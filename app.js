const express = require("express");
const app = express();
const itemsRouter = require("./items/items.router");
const usersRouter = require("./users/users.router");

app.use(express.json());

app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);

module.exports = app;