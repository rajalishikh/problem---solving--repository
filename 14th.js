// Display sum of all the even numbers from 51 to 85.
 let resultTotalEvenNumber=0;
 for (let number=51; number<=85;number++){
    if(number%2 == 0){
        console.log(number)
        resultTotalEvenNumber=resultTotalEvenNumber+number
    }
 }
 console.log(resultTotalEvenNumber)