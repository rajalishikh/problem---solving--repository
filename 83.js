// find the highest price phone bangladesh 
let mobile_price=[
    {phone_name:'Samsung',price:100,color:'red',camera:'12mp'},
    {phone_name:'walton',price:10000,color:'black',camera:'100mp'},
    {phone_name:'Xiomi',price:20000,color:'white',camera:'120mp'},
    {phone_name:'Realme',price:21000,color:'blue',camera:'400mp'},
    {phone_name:'vivo',price:321000,color:'red_blue',camera:'222mp'},
    {phone_name:'vivo2',price:5,color:'red_blue',camera:'222mp'},
]

function find_highest_price(phones){
    let first_phone_price=phones[0].price
    for(let phone of phones){
        if(first_phone_price<phone.price){
            first_phone_price=phone.price
        }
    }
    return first_phone_price


}
let output=find_highest_price(mobile_price)
console.log(output)