function calculatePriceWithDiscounts(priceValue, discountValue){
    
    return(priceValue *(100 - discountValue))/100;

       
}



function onClickButtonPriceDiscount(){


    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calculatePriceWithDiscounts(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "The price with discount is: $ " + priceWithDiscount;

}