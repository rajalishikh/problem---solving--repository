// Check whether a string contains all the vowels a, e, i, o, u


let sentence='a e i o u'
let lowerCase=sentence.toLocaleLowerCase()


if(
    lowerCase.includes('a') &&
     lowerCase.includes('e') && 
     lowerCase.includes('i') &&
     lowerCase.includes('o') && 
     lowerCase.includes('u')
    )
     {
        console.log('yes the vowel are exist ')

}
else{
    console.log('No the vowel is not exist ')
}




