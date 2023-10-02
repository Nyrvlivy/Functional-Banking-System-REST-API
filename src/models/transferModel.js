module.exports = (
  date,
  sourceAccountNumber,
  destinationAccountNumber,
  amount
) => {
  return {
    date: date,
    sourceAccountNumber: sourceAccountNumber,
    destinationAccountNumber: destinationAccountNumber,
    amount: amount,
  };
};
