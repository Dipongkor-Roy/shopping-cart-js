document.getElementById('case-plus-btn').addEventListener('click',function(){
    //for case plus btn
    const caseIncrease=caseNum(true,'input-case');
    updatePrice(caseIncrease,59,'price-case')
    subTotal();  
})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    //for case minus btn
    const caseDecrese=caseNum(false,'input-case');
    updatePrice(caseDecrese,59,'price-case');
    subTotal();
    
})