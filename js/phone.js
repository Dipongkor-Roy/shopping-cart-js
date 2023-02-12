document.getElementById('phone-plus-btn').addEventListener('click',function(){
    const phoneIncrease=caseNum(true,'input-phone');
    updatePrice(phoneIncrease,1219,'phone-price');
    subTotal();
})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    const phoneDecrese=caseNum(false,'input-phone');
    updatePrice(phoneDecrese,1219,'phone-price');
    subTotal();
})
