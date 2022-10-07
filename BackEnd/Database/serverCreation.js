const mongoose = require("mongoose");
const DB = "mongodb+srv://saurabh:Pass%401024@cluster0.1tiut.mongodb.net/Registers?retryWrites=true&w=majority"


mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
try {
  console.log("db created successfully");
} catch (error) {
  console.log("error");
}




// const mongoose = require('mongoose');

// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });

// try {
//   console.log("db created successfully");
// } catch (error) {
//   console.log(error);
// }