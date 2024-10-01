// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let number=1;
let result=0;
while(number<=100){
    
    result=result+number;
    if(result >= 100){
        break
    }
    console.log("Number",number)
    console.log("total number",result)
    number++
}
