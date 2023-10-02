const isPositiveAmount = (req, res, next) => {
  const { amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Amount not allowed!" });
  }

  next();
};

module.exports = { isPositiveAmount };
