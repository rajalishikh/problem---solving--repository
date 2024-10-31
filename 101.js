function monthlySavings(arr, livingCost){
    let total_sum_remaining_money_after_vat=0;
    // after pay vat remaining money is 
    let total_money_remaining=0

    
    let total_sum_less_then_3000=0

   if( typeof livingCost != 'number'){
    return "Invalid Input"
   }
   else{
    for(let x=0;x<arr.length ;x++)
        {
        if(arr[x]>=3000)
            {
            let Twenty_vat=arr[x] * (20/100);
           total_sum_remaining_money_after_vat=total_sum_remaining_money_after_vat+Twenty_vat;
           let after_vat_remaining_money=arr[x]-total_sum_remaining_money_after_vat;
           total_money_remaining=after_vat_remaining_money
    
           
    
      
        }
        else if(arr[x]<3000){
            total_sum_less_then_3000=total_sum_less_then_3000+arr[x]
            
        }
        
        
        
       
        
       }
       let sum=total_money_remaining+total_sum_less_then_3000;
       let savings=sum-livingCost
       if(savings >=0){
        return savings
    
       }else if(savings<0){
        return 'earn more '
       }
   }



 
 

}
let output=monthlySavings( 100, [ 900 , 2700 , 3400]  )
console.log(output)