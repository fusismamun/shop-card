// Common function 
function updateProduct(product,price, idIncress){
    const productInput = document.getElementById( product + '-number');
    let productText = productInput.value;
    if(idIncress == true){
        productText = parseInt(productText) + 1;
    }
    else if(productText > 0 ) {
        productText = parseInt(productText) - 1;
    }
    productInput.value = productText;
    // update amount 
    const totalPrice = document.getElementById(product + '-amount');
    totalPrice.innerText = productText * price;
    // Update calculateTotal 
    calculateTotal();
}
function valueUpdate(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber =parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = valueUpdate('phone') * 1219;
    const caseTotal = valueUpdate('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    // update onthe html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
    
    
}

// handelar phone incress decress event 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219, true);
 
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone',1219, false);
});
// Handel case incress decreass event

document.getElementById('case-btn').addEventListener('click', function(){
    updateProduct('case',59,true);
});
document.getElementById('caseminus-btn').addEventListener('click', function(){
    updateProduct('case',59 ,false);
});

