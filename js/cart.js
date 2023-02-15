

function updateCaseNumber(isIncrise){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const caseNUmberValue = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrise === true){
        newCaseNumber = caseNUmberValue +1;
    }
    else{
        newCaseNumber= caseNUmberValue - 1;
    }

    caseNumberField.value  = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const setCaseTotalPrice = document.getElementById('case-total');
    setCaseTotalPrice.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){

   const newCaseNumber=  updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);

   calculateSubTotal();
})
document.getElementById('btn-case-minues').addEventListener('click', function(){

   const newCaseNumber =  updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
       calculateSubTotal();


})