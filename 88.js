function calculate_sum(a,b){
    let sum = a+b;
    return sum

}
function calculate_minus(a,b){
    let minus=a-b;
    return minus;
}
function calculate_division(a,b){
    let division=a/b;
    return division;
}
function calculate_Multiplication(a,b){
    let multiplication=a*b;
    return multiplication
}

function calculator(a,b,operation){
    if(operation === 'sum'){
        let sum_result=calculate_sum(a,b)
        return sum_result
    }
    else if (operation === 'minus'){
       let minus_result= calculate_minus(a,b)
       return minus_result;

    }
    else if(operation === 'division'){
        let division_result= calculate_division(a,b);
        return division_result;
    }
    else if(operation === 'multiplication'){
       let multiplication_result= calculate_Multiplication(a,b)
       return multiplication_result
    }

}

let final_output=calculator(5,6,"sum");
console.log(final_output)