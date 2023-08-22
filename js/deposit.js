// add event listener for deposit button
document.getElementById("deposit_button").addEventListener("click", function() {
    // console.log("deposit button clicked");
    // read deposit input field
    const depositField = document.getElementById("deposit_field");
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    // read deposit total amount
    const depositTotalElement = document.getElementById("deposit_amount");
    const depositAmountTotalString = depositTotalElement.innerText;
    const depositAmountTotal = parseFloat(depositAmountTotalString);
    // depositTotalElement.innerText = depositAmount

    const currentDepositTotal = depositAmount + depositAmountTotal;

    depositTotalElement.innerText = currentDepositTotal;

    // Total balance calculation
    const totalBalanceAmountElement = document.getElementById("total_balance_amount");
    const totalBalanceAmountString = totalBalanceAmountElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);

    // calculate sum
    const totalBalance = totalBalanceAmount + depositAmount;

    totalBalanceAmountElement.innerText = totalBalance;


    // Clear the deposit fields
    depositField.value = "";    
})

