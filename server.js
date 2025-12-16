// App
const app = require("./app");
// env
require("dotenv").config();
// DB
require("./configs/db");


// Server
app.listen(process.env.PORT, () => {
    console.log(`Server Running Successfully On Port ${process.env.PORT}`);
})