// Give me a function that returns all even addition elements of an array
function addition_Even_Array(num){
  let sum=0;
    console.log(num)
    for(let a of num){
        if(a %2 == 0){
            sum= sum +a;

        }
    } 
    return sum

}
let result =addition_Even_Array([12,3,6,8])
console.log(result)