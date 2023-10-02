module.exports = (
  number,
  balance,
  name,
  cpf,
  birthDate,
  phoneNumber,
  email,
  password
) => {
  return {
    number: number,
    balance: balance,
    user: {
      name: name,
      cpf: cpf,
      birthDate: birthDate,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    },
  };
};
