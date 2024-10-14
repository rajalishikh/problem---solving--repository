// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let colors_reverse=[]
for(let i=colors.length - 1;i>=0;i--){
    let reverse_array=colors[i]
    colors_reverse.push(reverse_array)
}
console.log(colors_reverse)