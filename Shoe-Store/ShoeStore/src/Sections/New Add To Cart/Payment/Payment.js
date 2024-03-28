
let cardNumInput =  
    document.querySelector('#cardNum') 
  
cardNumInput.addEventListener('keyup', () => { 
    let cNumber = cardNumInput.value 
    cNumber = cNumber.replace(/\s/g, "") 
  
    if (Number(cNumber)) { 
        cNumber = cNumber.match(/.{1,4}/g) 
        cNumber = cNumber.join(" ") 
        cardNumInput.value = cNumber 
    } 
})
function purchaseBtnClicked () {
    alert ('Thank you for your purchase');
    cartModalOverlay.style.transform= 'translateX(-100%)'
   var cartItems = document.getElementsByClassName('product-rows')[0]
   while (cartItems.hasChildNodes()) {
     cartItems.removeChild(cartItems.firstChild)
     
   }
    updateCartPrice()
  }