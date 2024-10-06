// ***Only for practice 
// practice 1
let bookNameOne='Chemistry'
let bookNameTwo='chemistry'

if(bookNameOne.toLocaleLowerCase()=== bookNameTwo.toLocaleLowerCase()){
    console.log('IN SHA ALLAH i am reading properly ')
}else{
    console.log('I cant read properly ')

}

// practice 2
let  foodName='cake, chocolate  cake '

console.log(foodName.slice(5,))

let friendsName='Arif, raj, jihat, rasel, nibir, ornove, siam, baten, refat'
console.log(friendsName.split(' ',))

// practice 3 
 let profession = 'I am a junior web developer'
 let reverseSentence=' '

 for(let reverse of profession){
    reverseSentence =reverse + reverseSentence;
    
 }
 console.log(reverseSentence)


