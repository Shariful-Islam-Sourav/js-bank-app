//Balance
const balanceValue = document.getElementById("balance-value")
//Deposit
document.getElementById("deposit-button").addEventListener("click",function(){
    const depositInput = document.getElementById("deposit-input");
    const depositNew = depositInput.value;
    const depositValue = document.getElementById("deposite-value");
    depositValue.innerText = parseFloat(depositNew) + parseFloat(depositValue.innerText);
    depositInput.value = "";
    balanceValue.innerText = parseFloat(depositNew) + parseFloat(balanceValue.innerText);
})

//Widthdraw
document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawNew = withdrawInput.value;
    const withdrawValue = document.getElementById("withdraw-value");
    withdrawValue.innerText = parseFloat(withdrawNew) + parseFloat(withdrawValue.innerText);
    withdrawInput.value = "";
    balanceValue.innerText = balanceValue.innerText - withdrawNew;
});

