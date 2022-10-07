const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser")




//specifying the system to convert output into json
app.use(express.json());

//linking the router files to make routes
app.use(require("./Router/Auth"))

//specifying the system to use the library
app.use(cookieParser());


app.listen(PORT, () => {
  console.log("req handled successfully");
});
