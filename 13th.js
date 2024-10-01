// Display sum of all the odd numbers from 91 to 129.
let result=0;
for(let number=91; number<=129; number++){
    if(number %2 !=0){
        console.log(number)
        result=number+result
    }

}
console.log("The total number of odd ",result)