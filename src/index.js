const express = require("express");
const app = express();
const port = 3000;

const mainRouter = require("./routers/mainRouter");

app.use(express.json());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server initialized on port ${port}.`);
});