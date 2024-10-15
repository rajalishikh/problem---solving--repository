// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
let statement_reverse=statement.split(' ')
let final_statement_reverse=' '


for(let i=statement_reverse.length -1;i>=0;i--){
    final_statement_reverse= final_statement_reverse+" "+ statement_reverse[i] 
   
    

   
}
console.log(final_statement_reverse)

