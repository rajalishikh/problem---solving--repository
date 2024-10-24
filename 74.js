// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longest(string_example){
    let split_string_example=string_example.split(' ')
    console.log(split_string_example)
    

    let biggest_word_length=0;

    let biggest_word=' ';

    for(let i =0; i<split_string_example.length; i++){

        if(split_string_example[i].length>biggest_word_length){
            biggest_word_length=split_string_example[i].length
            biggest_word=split_string_example[i]

        }

       

    }
    console.log(biggest_word)
    
}
longest('I am learning Programming to become a programmer')
