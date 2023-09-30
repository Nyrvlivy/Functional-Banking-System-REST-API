const { accounts } = require("../data/database");

const listAccounts = (req, res) => {
  const { bank_password } = req.query;

  if (accounts.length === 0) {
    return res.status(204).send();
  }

  return res.status(200).json(accounts);
};

module.exports = {
  listAccounts,
};