const accountModel = require("../models/accountModel")

module.exports = {
  bank: {
    name: "Cubos Bank",
    number: "123",
    branchNumber: "0001",
    password: "Cubos123Bank",
  },
  accounts: [
    accountModel(1, 0, "Foo Bar", "00011122233", "2021-03-15", "71999998888", "foo@bar.com", "1234"),
    accountModel(2, 1000, "Foo Bar 2", "00011122234", "2021-03-15", "71999998888", "foo@bar2.com", "12345"),
  ],

  withdraws: [],
  deposits: [],
  transfers: [],
};
