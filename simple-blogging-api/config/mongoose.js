const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const mongooseUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/simple-blogging";
mongoose.connect(mongooseUrl, () => {
  console.log("Connected to db");
});
