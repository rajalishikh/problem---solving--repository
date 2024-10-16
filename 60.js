// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer_value){
    if(integer_value %2 == 0){
        console.log('The number is  Even')
    }
    else if(integer_value % 2 !=0){
        console.log("The number is odd")
    }
}
odd_even(23)