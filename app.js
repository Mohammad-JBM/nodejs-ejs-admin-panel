// Express
const express = require("express");
// App
const app = express();
const authRouter = require("./routers/v1/auth");
const coursesRouter = require("./routers/v1/course");
// Path
const path = require("path");
// Static File
app.use("/css", express.static(path.join(__dirname, "public/asset/style")))
app.use("/fonts", express.static(path.join(__dirname, "public/asset/fonts")))
app.use("/images", express.static(path.join(__dirname, "public/asset/images")))
app.use("/js", express.static(path.join(__dirname, "public/asset/js")))
app.use(express.urlencoded({ extended: false }));
// Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Router
app.use("/user", authRouter);
app.use("/courses", coursesRouter);
// Export
module.exports = app;