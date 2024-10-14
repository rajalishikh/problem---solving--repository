// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const numbers_even=[]
for(let num of numbers){
    if(num % 2 == 0){
        numbers_even.push(num)
    }
   
}
console.log(numbers_even)
