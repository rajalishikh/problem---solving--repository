// Count how many times a string has the letter a or A
let myMomSelf= "My mom  is so much simple house wife .And some very good know about  hadij"
let count= myMomSelf.match(/a/gi).length
console.log("total a and A number ",count)