// Display sum of all the even numbers from 206 to 311.
let evenNumber=206;
let evenTotalResult=0
while(evenNumber <= 311){
    if(evenNumber %2 == 0){
        console.log(evenNumber)
        evenTotalResult=evenNumber+evenTotalResult
    }
    evenNumber=evenNumber+1;

}
console.log("Total number of even from 206 to 311")