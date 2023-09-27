const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const port = 3000;

app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`Server initialized on port ${port}.`);
});
isso msm