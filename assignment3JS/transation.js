const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class MissingFieldError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingFieldError";
  }
}

class NullEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullEntryError";
  }
}

const valid = [];
const invalid = [];
function processTransactions(list) {

  for (const tx of list) {

    debugger; 

    try {
      if (tx === null || tx === undefined) {
        throw new NullEntryError("Transaction cannot be null or undefined");
      }
      if (!("id" in tx) || !("amount" in tx)) {
        throw new MissingFieldError("Transaction missing id or amount");
      }
      if (tx.amount < 0) {
        throw new NegativeAmountError("Negative amount is not allowed");
      }

      // All good → valid
      valid.push(tx);

    } catch (error) {
      invalid.push({
        transaction: tx,
        error: error.name,
        message: error.message
      });
    }
  }
}

processTransactions(transactions);
console.log("Total:", transactions.length);
console.log("✔ Successful:", valid.length);
console.log("✖ Failed:", invalid.length);