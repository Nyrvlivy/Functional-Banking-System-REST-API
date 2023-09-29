const database = require("../data/database");
const accountModel = require("../models/accountModel");
const {
  validateCPF,
  validateEmail,
} = require("../controllers/dataValidationController");

const generateRandomNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const createNewAccount = (req, res) => {
  const { name, cpf, birthDate, phoneNumber, email, password } = req.body;

  if (!name || !cpf || !birthDate || !phoneNumber || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const cpfStatusMessage = validateCPF(cpf);
  if (cpfStatusMessage.status === 400) {
    return res.status(400).json({ message: `"Invalid CPF: ${cpfStatusMessage.message}` });
  }
  const emailStatusMessage = validateEmail(email);
  if (emailStatusMessage.status === 400) {
    return res
      .status(400).json({ message: `"Invalid Email: ${emailStatusMessage.message}` });
  }

  const existingAccount = database.accounts.find((account) => {
    return account.user.cpf === cpf || account.user.email === email;
  });
  if (existingAccount) {
    if (existingAccount.user.cpf === cpf) {
      return res.status(400).json({ message: "The provided CPF is already registered!" });
    } else if (existingAccount.user.email === email) {
      return res.status(400).json({ message: "The provided email is already registered!" });
    }
  }

  let uniqueNumber;
  while (true) {
    uniqueNumber = generateRandomNumber();
    const isNumberDuplicate = database.accounts.some(
      (account) => account.number === uniqueNumber
    );
    if (!isNumberDuplicate) {
      break;
    }
  }

  database.accounts.push(
    accountModel(uniqueNumber, 0, name, cpf, birthDate, phoneNumber, email, password)
  );

  return res.status(201).send();
};

const updateAccount = () => {};

const deleteAccount = () => {};

module.exports = {
  createNewAccount,
  updateAccount,
  deleteAccount,
};
