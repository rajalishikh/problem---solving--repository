// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(num){
    let size_array=num.length;
   
   let avg=0;
    for(let i of num){
        console.log(i)
        avg=(avg+i) 
    }
    let avg_result=avg / size_array
    return [size_array,avg_result]



}
let result= make_avg([1,3,5,7,8])
console.log("Total size of array",result[0],".","The average of array",result[1])
