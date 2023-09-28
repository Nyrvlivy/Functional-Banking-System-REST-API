const express = require("express");
const app = express();
const port = 3000;

const mainRoutes = require("./routes/mainRoutes");

app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`Server initialized on port ${port}.`);
});
