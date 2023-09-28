const express = require("express");
const router = express.Router();
const accountOperationsRouter = require("../routers/accountOperationsRouter");
const bankAccountsRouter = require("../routers/bankAccountsRouter");
const queriesRouter = require("../routers/queriesRouter");
const transactionsRouter = require("../routers/transactionsRouter");

const mainRouteMiddleware = require("../middlewares/mainRouteMiddleware");

router.use("/", accountOperationsRouter);
router.use("/", bankAccountsRouter);
router.use("/", queriesRouter);
router.use("/", transactionsRouter);

router.get("/", (req, res) => {
  res.send("This is my main route!");
});

module.exports = router;
