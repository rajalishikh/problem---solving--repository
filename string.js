// reverse a string just using for loop 
let girl = 'I am a developer';
let reverse='';
for (let i =0;i<girl.length;i++){
    console.log(i)
    console.log(girl[i])
    const sentence=girl[i]
    reverse=sentence + reverse
}
console.log("Answer:",reverse);

let reverse2=girl.rev