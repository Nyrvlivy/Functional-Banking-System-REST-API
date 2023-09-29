// Base: https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/
// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address

const httpStatusCode = require("../data/httpStatusCode");

const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11) {
    return { status: 400, message: "Digits are missing!" };
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return { status: 400, message: httpStatusCode[400] };
  }

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(9, 10))) {
    return { status: 400, message: httpStatusCode[400] };
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(10, 11))) {
    return { status: 400, message: httpStatusCode[400] };
  }

  return { status: 200, message: httpStatusCode[200] };
}

const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return { status: 400, message: httpStatusCode[400] };
  }

  return { status: 200, message: httpStatusCode[200] };
}

module.exports = {
  validateCPF,
  validateEmail,
};