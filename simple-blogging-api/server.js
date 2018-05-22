const express = require("express");
const bodyParser = require("body-parser");
require("./config/mongoose");
const postRouter = require("./routes/postRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/posts", postRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
