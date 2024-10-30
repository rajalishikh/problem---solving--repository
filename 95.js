function calculate_price(Shingara,samocha,jelepi){

    if(typeof Shingara != 'number' || typeof samocha !='number' || typeof jelepi !='number' ){
        return ("Please give me a valid number")
    }
    else if(Shingara <1 || samocha <1 || jelepi <1)
        {
        return("Please provide me a just Positive number ")

    }
    else{

        
    const shingara_price=5;
    const samocha_price=10;
    const jelepi_price=20;
    // calculate the total price 
    let totalPrice= shingara_price*Shingara + samocha_price*samocha +jelepi_price *jelepi;
    return totalPrice;

    }
    
}
let total_output=calculate_price(2,2,2)
console.log(total_output)