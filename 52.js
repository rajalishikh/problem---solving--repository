//Write a function that adds all the elements of an array
function addsArray(num1){
    let sum=0;
    for(let i of num1){
       
      console.log(i)
      sum=sum+i;
       
    }
    return sum

}
let result=addsArray([1,2,3,6])
console.log("Total addition of sum is ",result)