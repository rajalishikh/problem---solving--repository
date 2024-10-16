// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function conditional_work(num){
    if(num %2 != 0){
        return num *2;
    }
    else if(num %2 == 0 ){
        return num %2
    }
}

let result =conditional_work(23)
console.log("The answer is ",result)