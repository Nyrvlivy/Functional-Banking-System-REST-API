const accountModel = require("../models/accountModel");
const depositModel = require("../models/depositModel");
const withdrawModel = require("../models/withdrawModel");
const transferModel = require("../models/transferModel");

module.exports = {
  bank: {
    name: "Cubos Bank",
    number: "123",
    branchNumber: "0001",
    password: "Cubos123Bank",
  },
  accounts: [
    accountModel(
      "000001",
      0,
      "Foo Bar",
      "00011122233",
      "2021-03-15",
      "71999998888",
      "foo@bar.com",
      "1234"
    ),
    accountModel(
      "000002",
      1000,
      "Foo Bar 2",
      "00011122234",
      "2021-03-15",
      "71999998888",
      "foo@bar2.com",
      "12345"
    ),
  ],

  deposits: [],
  withdraws: [],
  transfers: [],
};
