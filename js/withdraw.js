// add Event handlers for withdraw buttons

document.getElementById("withdraw_button").addEventListener("click", function () {
    // read withdraw button and withdraw field
    const withdrawFieldElement = document.getElementById("withdraw_field");
    const withdrawFieldString =  withdrawFieldElement.value;
    const withdrawAmount = parseFloat(withdrawFieldString);
    
    // read the withdraw amount
    const withdrawAmountElement = document.getElementById("withdraw_amount");
    const withdrawAmountString = withdrawAmountElement.innerText;
    const withdrawAmountOld = parseFloat(withdrawAmountString);

    const withdrawAmountNew = withdrawAmount + withdrawAmountOld;
    withdrawAmountElement.innerText = withdrawAmountNew;

    // Total Balance Calculations

    const balanceTotalElement = document.getElementById("total_balance_amount");
    const balanceTotalString = balanceTotalElement.innerText;
    const blanceTotal = parseFloat(balanceTotalString);

    const newBalanceAfterWithdraw = blanceTotal - withdrawAmount;

    balanceTotalElement.innerText = newBalanceAfterWithdraw;

     withdrawFieldElement.value = "";

})