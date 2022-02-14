document.getElementById("deposit-btn").addEventListener("click", function () {
  const amountField = document.getElementById("deposit");
  const amount = parseFloat(amountField.value);
  //   console.log(amount);
  //connect to deposit total
  const totalDiposit = document.getElementById("total-deposit");
  const previousAmount = totalDiposit.innerText;
  const sumDepositAmount = parseFloat(previousAmount) + amount;
  totalDiposit.innerText = sumDepositAmount;
  //   totalDiposit.innerText = amount;
  amountField.value = "";
  //add main balance        ***6-9 & 13-16  just SAME***
  const mainBalance = document.getElementById("main-balance");
  const beforeBalance = parseFloat(mainBalance.innerText);
  const sumBalance = beforeBalance + amount;
  mainBalance.innerText = sumBalance;
});
//handle withdraw button from here
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw");
  const withdraw = parseFloat(withdrawField.value);
  //   console.log(withdraw);
  const totalWithdraw = document.getElementById("total-withdraw");
  const previousWithdrawAmount = totalWithdraw.innerText;
  const sumWithdraw = parseFloat(previousWithdrawAmount) + withdraw;
  totalWithdraw.innerText = sumWithdraw;
  withdrawField.value = "";
  // Reduce main Balance
  const mainBalance = document.getElementById("main-balance");
  const Balance = mainBalance.innerText;
  const reduceBalance = parseFloat(Balance) - withdraw;
  mainBalance.innerText = reduceBalance;
});
