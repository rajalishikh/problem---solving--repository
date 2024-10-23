function find_average_odd_number(num_array){
   
    let new_array=[];
    
    for(let num of num_array){
        if(num % 2 != 0){
            new_array.push(num)
        }
        
        
    }
    
    // second calculation of odd  array average 
    let sum =0;
    for(let odd of new_array){
        sum =sum+odd

    }
    let total_length=new_array.length
    let the_total_average_odd=sum / total_length
    return the_total_average_odd

}
let the_final_output= find_average_odd_number([12,4,7,8,9,2,19,33])
console.log("The average of odd number is ",the_final_output)