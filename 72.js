// Write a function to count the number of vowels in a string.
function count(vowels){
    let vowels_lowercase=vowels.toLowerCase();
    console.log(vowels_lowercase)
    let counter=''
    for(let i=0;i<vowels.length;i++){
        let vowels_lowercase=vowels[i].toLowerCase();
        if(vowels_lowercase == 'a' || vowels_lowercase == 'e' || vowels_lowercase == 'i' || vowels_lowercase == 'o' || vowels_lowercase == 'u'){
            counter=counter+vowels_lowercase;
           
        }

       
    }
    console.log(counter)
    return counter.length
    
}
 let total_variable_vowel= count('a e i o u')
 console.log(total_variable_vowel)