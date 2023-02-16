/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4.5. set new withdraw total by using setTextElementValueById funtion
5. get previous balance total by using getElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById function

*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdraw btn click');
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount ;
    setTextElementValueById('balance-total', newBalanceTotal);
})