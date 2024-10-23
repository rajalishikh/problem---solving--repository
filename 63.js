// Write a function that converts a value in inches to a combination of feet and inches.
function conversion(num1){
    let conversion_fit=num1/12;
    let conversion_fit_Integer=parseInt(conversion_fit) 
    
    let conversion_Inch=num1 %12
   let result =conversion_fit_Integer + " fit " + conversion_Inch + " inch ";
   return result



}
 let total_result=conversion(222)
 console.log("The total result is ",total_result)