



function updatePhoneCount(isIncris) {
  const phoneInputField = document.getElementById("phone-field");
  const phoneInputFieldString = phoneInputField.value;
  const phoneInputFieldValue = parseInt(phoneInputFieldString);

  // phoneInputField.value= phoneInputFieldValue + 1;
  if (isIncris == true) {
    phoneInputField.value = phoneInputFieldValue + 1;
  } else {
    phoneInputField.value = phoneInputFieldValue - 1;
  }

}
function updatePhonePrice(isPhonePrice){
    const phonePriceTotal = document.getElementById('phone-price');
    const phonePriceString =  phonePriceTotal.innerText;
    const phonePriceAmount = parseInt(phonePriceString);
    // phonePriceTotal.innerText = phonePriceAmount + 1219;

    if(isPhonePrice == true){
        phonePriceTotal.innerText = phonePriceAmount + 1219;
    }
    else{
        phonePriceTotal.innerText = phonePriceAmount - 1219;
    }
}



document.getElementById("btn-phone-pluse").addEventListener("click", function () {


    updatePhoneCount(true);
    updatePhonePrice(true);
    calculateSubTotal();

  });

document.getElementById("btn-phone-minuse").addEventListener("click", function () {
    updatePhoneCount(false);
    updatePhonePrice(false);
    calculateSubTotal();
  });
