function caseNum(isIncrease,input){
    const getInputField=document.getElementById(input);
    const getInputValue=getInputField.value ;
    const convertNum=parseInt(getInputValue);
    let newValue;
    if(isIncrease){
        newValue=convertNum+1;
        getInputField.value=newValue;
       
    }else{
        newValue=convertNum-1;
        if(newValue>0){
            getInputField.value=newValue;
        }
        else{
            getInputField.value=0;
        }
    }
    return newValue;
    
}
function updatePrice(increasPhone,price,id){
    const phonePrice=document.getElementById(id)
    const totalPrice=increasPhone*price;
    if(totalPrice>=0){
        phonePrice.innerText=totalPrice;
    }
    else{
        phonePrice.innerText=0;
    }   
}
function subTotal(){
    const phonePrice=document.getElementById('phone-price')
    const phonePriceVale=phonePrice.innerText;
    const value1=parseInt(phonePriceVale);
    const casePrice=document.getElementById('price-case')
    const casePriceVale=casePrice.innerText;
    const value2=parseInt(casePriceVale);
    const totalCount=value1+value2;

    const subTotal=document.getElementById('sub-total')
    subTotal.innerText=totalCount;

    const taxValue=document.getElementById('tax')
    const taxAmount=(totalCount*0.1).toFixed(1);
    const taxAmountNum=parseFloat(taxAmount);
    taxValue.innerText=taxAmountNum;

    const mainTotal=document.getElementById('main-total')
    const mainCal=totalCount+taxAmountNum;
    mainTotal.innerText=mainCal;
  


}
