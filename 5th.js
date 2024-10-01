// Display sum of all the odd numbers from 81 to 131.
let number=81
let result=0;

while(number <=131){
    
    if(number %2 != 0){
       
        console.log("The odd number ",number)
        result=result+number
    }
    number=number+1
    
    
}
console.log('Total sum of odd  number',result)


