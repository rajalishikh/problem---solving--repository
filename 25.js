// Run a loop in obj and find the obj value and keys 
let myPhone={
    phoneName: 'realme ',
    phonePrice:'1200',
    PhoneRam:'4gb',
    phoneRom:'64gb',
    color:'black',

}

for(let i in myPhone){
    
    console.log( i,":",myPhone[i])

}