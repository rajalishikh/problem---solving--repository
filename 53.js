
// Give me a function that returns all even elements of an array
function evenArray(num){
    let even_Array_result=[]
    for (let i of num){
        if(i % 2 == 0){
            even_Array_result.push(i)
            
        }
    }
    return even_Array_result;

}
let result =evenArray([12,3,5,4,6,9])
console.log(result)