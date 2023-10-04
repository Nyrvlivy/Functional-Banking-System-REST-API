const database = require("../data/database");
const httpStatusCode = require("../data/httpStatusCode");
const { accounts } = require("../data/database");
const accountModel = require("../models/accountModel");
const { validateCPF, validateEmail } = require("./dataValidationController");

const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);

const validateAccountData = (
  accountNumber,
  name,
  cpf,
  birthDate,
  phoneNumber,
  email,
  password
) => {
  if (!name || !cpf || !birthDate || !phoneNumber || !email || !password) {
    return { status: 400, message: "All fields are required!" };
  }

  const cpfStatusMessage = validateCPF(cpf);
  if (cpfStatusMessage.status === 400) {
    return { status: 400, message: `Invalid CPF: ${cpfStatusMessage.message}` };
  }
  const emailStatusMessage = validateEmail(email);
  if (emailStatusMessage.status === 400) {
    return {
      status: 400,
      message: `Invalid Email: ${emailStatusMessage.message}`,
    };
  }

  const existingAccount = accounts.find((account) => {
    return account.user.cpf === cpf || account.user.email === email;
  });
  if (existingAccount) {
    if (
      existingAccount.user.cpf === cpf &&
      existingAccount.number != accountNumber
    ) {
      return { status: 400, message: "CPF is already registered!" };
    } else if (
      existingAccount.user.email === email &&
      existingAccount.number != accountNumber
    ) {
      return { status: 400, message: "Email is already registered!" };
    }
  }

  return { status: 200, message: httpStatusCode[200] };
};

const createNewAccount = (req, res) => {
  const { name, cpf, birthDate, phoneNumber, email, password } = req.body;

  const validationStatus = validateAccountData(
    null,
    name,
    cpf,
    birthDate,
    phoneNumber,
    email,
    password
  );
  if (validationStatus.status !== 200) {
    return res
      .status(validationStatus.status)
      .json({ message: validationStatus.message });
  }

  let uniqueNumber;
  do {
    uniqueNumber = generateRandomNumber();
  } while (
    database.accounts.some((account) => account.number === uniqueNumber)
  );

  accounts.push(
    accountModel(
      uniqueNumber,
      0,
      name,
      cpf,
      birthDate,
      phoneNumber,
      email,
      password
    )
  );

  return res.status(201).send();
};

const updateAccount = (req, res, next) => {
  const { accountNumber } = req.params;

  const userAccount = accounts.find(
    (account) => account.number == accountNumber
  );

  const { name, cpf, birthDate, phoneNumber, email, password } = req.body;

  const validationStatus = validateAccountData(
    accountNumber,
    name,
    cpf,
    birthDate,
    phoneNumber,
    email,
    password
  );
  if (validationStatus.status !== 200) {
    return res
      .status(validationStatus.status)
      .json({ message: validationStatus.message });
  }

  userAccount.user.name = name;
  userAccount.user.cpf = cpf;
  userAccount.user.birthDate = birthDate;
  userAccount.user.phoneNumber = phoneNumber;
  userAccount.user.email = email;
  userAccount.user.password = password;

  res.status(204).send();
  next();
};

const deleteAccount = (req, res, next) => {
  const { accountNumber } = req.params;

  const accountIndex = accounts.findIndex(
    (account) => account.number === accountNumber
  );

  if (accounts[accountIndex].balance != 0) {
    return res.status(403).json({ message: httpStatusCode[403] });
  }

  accounts.splice(accountIndex, 1);

  res.status(204).send();
  next();
};

module.exports = {
  createNewAccount,
  updateAccount,
  deleteAccount,
};
