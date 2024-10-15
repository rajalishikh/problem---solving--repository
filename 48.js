function doMath(number1,number2){
   let sum=number1+number2;
   
   let multiplication=number1*number2
   
   let division= number1/number2
   
   let minus=number1 -number2
   return [sum,multiplication,division,minus]

}
let result=doMath(20,10)
console.log(result[0],result[1],result[2],result[3])

