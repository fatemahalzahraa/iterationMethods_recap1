// You are given an array representing a series of financial records for a freelance worker.
// Each record is an array containing the record type ("income", "expense", "investment", or "refund") and the amount.
const financialRecords = [
  ["income", 1800],
  ["expense", 500],
  ["investment", 1000],
  ["income", 2400],
  ["refund", 200],
  ["expense", 800],
  ["income", 1500],
];

/*****************************************************************
Part 1: Record Categorization

Task 1) Create a new array containing only "income" and "refund" records.
       Output 1) [["income", 1800], ["income", 2400], ["refund", 200], ["income", 1500]]

Task 2) Create a new array containing only "expense" and "investment" records.
       Output 2) [["expense", 500], ["investment", 1000], ["expense", 800]]

******************************************************************/

//Part 1
//Task 1)

const incomeAndRefund = financialRecords.filter((financalRecord) => {
  return financalRecord[0] == "income" || financalRecord[0] == "refund";
});
console.log(incomeAndRefund);

// Task 2)

const expenseAndInvest = financialRecords.filter((financalRecord) => {
  return financalRecord[0] == "expense" || financalRecord[0] == "investment";
});
console.log(expenseAndInvest);

/*****************************************************************
Part 2: Financial Calculations

Task 3) Calculate the total for "income" and "refund" records combined.
       Output 3) 5900

Task 4) Calculate the total for "expense" and "investment" records combined.
       Output 4) 2300

******************************************************************/

//Part2
//Task 3)

let sum = 0;

incomeAndRefund.forEach((financalRecord) => {
  sum += financalRecord[1];
});
console.log(sum);

//solving by reduce TASK 3//

const totalInc = incomeAndRefund.reduce(
  (total, value) => {
    return total + value[1];
  },

  0
);
console.log(totalInc);

//Task 4)

let sum2 = 0;

expenseAndInvest.forEach((financialRecord) => {
  sum2 += financialRecord[1];
});

console.log(sum2);

//solving by reduce TASK 4

const totalExp = expenseAndInvest.reduce((total, value) => {
  return total + value[1];
}, 0);

console.log(totalExp);

/*****************************************************************
Part 3: Detailed Analysis

Task 5) Determine the net financial impact (total for "income" and "refund" - total for "expense" and "investment").
       Output 5) 3600

Task 6) Identify and create a new array with records where the amount is greater than $800.
       Output 6) [["income", 1800], ["investment", 1000], ["income", 2400], ["income", 1500]]

******************************************************************/

// Use JavaScript array methods like filter and reduce to achieve the desired outputs for each task.

//Part3
//Task 5)

const netFinancialImpact = sum - sum2;
console.log(netFinancialImpact);

const greaterThan800 = financialRecords.filter((financialRecord) => {
  return financialRecord[1] > 800;
});
console.log(greaterThan800);
