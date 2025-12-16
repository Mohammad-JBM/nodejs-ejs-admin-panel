// Mongo
const mongoose = require("mongoose");
// env
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Server Connected To DB Successfully"))
    .catch(err => console.log(`error => ${err}`))