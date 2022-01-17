const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const bcrypt = require("bcrypt");

//Import Routers
const recipesRouter = require("./routes/recipes");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
// const commentRouter = require("./routes/comment")
app.use(cors());
app.use(express.json());


//Routes Middleware
app.use("/recipes", recipesRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
// app.use("/recipes", commentRouter)

const PORT = 5000;
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
