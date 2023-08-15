
//---------------------- Deposit Part-------------------

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const getDepositAmount = depositAmount.value;
    const getDepositAmountNumber = parseFloat(getDepositAmount);

    if(isNaN(getDepositAmountNumber)){
        alert('Provide Valid Number');
        return;
    }
    
    const deposit = document.getElementById('deposit');
    const previousDeposit = deposit.innerText;
    const previousDepositNumber = parseFloat(previousDeposit)
    
    const totalDepposit = getDepositAmountNumber + previousDepositNumber;
    deposit.innerText = totalDepposit;
    depositAmount.value = '';

    const balance = document.getElementById('balance');
    const mainBalance = balance.innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const totalBalance = mainBalanceNumber + getDepositAmountNumber;
    balance.innerText = totalBalance;

})

//---------------------- Withdraw Part-------------------

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const getWithdrawAmount = parseFloat(withdrawAmount.value);

    if(isNaN(getWithdrawAmount)){
        alert('Provide Valid Number');
        return;
    }
    
    const withdraw = document.getElementById('withdraw');
    const previousWithdraw = parseFloat(withdraw.innerText);
    
    withdrawAmount.value = '';
    
    const balance = document.getElementById('balance');
    const previousBalance = parseFloat(balance.innerText);
    
    if(getWithdrawAmount > previousBalance){
        alert("Don't have Enough Balance");
        return;
    }

    const currentWithdraw = previousWithdraw + getWithdrawAmount;
    withdraw.innerText = currentWithdraw;

    const currentBalance = previousBalance - getWithdrawAmount;
    balance.innerText = currentBalance;

    
})