const account = {
  name: "Logan Anderson",
  expenses: [],
};

const addExpense = (description, price) => {
  account.expenses.push({ type: description, amount: price });
  console.log(account);
};

addExpense("Rent", 950);
addExpense("Yerba Mate", 3);
addExpense("Laptop Stand", 34);

let total = 0;

const getAccountSummary = () => {
  account.expenses.map((expense) => {
    total += expense.amount;
    console.log(`${account.name} has $${total} in expenses`);
  });
};

getAccountSummary();
