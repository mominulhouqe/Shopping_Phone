




function updatePhonePriceAndCasePrice(elementId){
    const  phonePriceCount = document.getElementById(elementId);
    const phonePriceCountString = phonePriceCount.innerText;
    const phonePriceTotalAmount = parseInt(phonePriceCountString);
    // phonePriceCount.innerText = phonePriceTotalAmount;
    return phonePriceTotalAmount;
}

function tax(elementId,  value){
   
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}




function calculateSubTotal(){
     // calculate total
     const currentPhonePriceTotal = updatePhonePriceAndCasePrice('phone-price');
     const currentCaseTotal = updatePhonePriceAndCasePrice('case-total');

     const currentSumTotal = currentPhonePriceTotal + currentCaseTotal;

    // const subTotalElement = document.getElementById('subTotal');
    tax('subTotal', currentSumTotal);

    // subTotalElement.innerText = currentSumTotal;

    // calculate tax 

    // const taxAmountValue = parseInt(taxAmountString);
    // taxAmount.innerText = taxAmountValue;
    // const totalTax = taxAmount * 0.1;
    const taxAmountString = (currentSumTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    tax('tax-amount' , taxAmount)
    
    const finalAmount = currentSumTotal + taxAmount;
    tax('final-amount' , finalAmount);



}