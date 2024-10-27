// find the smallest number in a array 

let number_array=[99,2,3,77,88,99,77,1,-2,6]
function find_smallest_number(num){
    let first_index=num[0];
    for(let small of num){
        if(first_index > small){
            first_index=small

        }
    }
    return first_index


}
let output=find_smallest_number(number_array)
console.log(output)