// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let numbers_string='';



for(let num of numbers){
   
   numbers_string=numbers_string.concat(num);
   
   
}

console.log(numbers_string)



