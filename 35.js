// Capitalize Every first Letter of each word in a String

let description_About_hometown='My home town is Dhaka, Dhaka is the Capital of Bangladesh'
// console.log(description_About_hometown.length)

let separate_each_word=description_About_hometown.split(' ')
console.log(separate_each_word.length)

for (let i=0; i<separate_each_word.length; i++){
    separate_each_word[i]=separate_each_word[i][0].toUpperCase()+separate_each_word[i].slice(1)

   
}
console.log(separate_each_word.join(' '))
