// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
   let result= binary.match(/0/g).length
   return result
}
let result =count_zero('10100001')
console.log("The total zero in my array is ",result)