// functions with arguments challenge

const tipCalculator = function (price, tip = 0.2) {
  return price * tip + price;
};

let total = tipCalculator(100, 0.2);

console.log("Your total is: ", total);
