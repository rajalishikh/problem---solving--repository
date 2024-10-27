// find the lowest price phone in market 

let mobile_price=[
    {phone_name:'Samsung',price:100,color:'red',camera:'12mp'},
    {phone_name:'walton',price:10000,color:'black',camera:'100mp'},
    {phone_name:'Xiomi',price:20000,color:'white',camera:'120mp'},
    {phone_name:'Realme',price:21000,color:'blue',camera:'400mp'},
    {phone_name:'vivo',price:321000,color:'red_blue',camera:'222mp'},
    {phone_name:'vivo2',price:5,color:'red_blue',camera:'222mp'},
]
   
function mobile_phone(obj_phone){
    let phone_price=obj_phone[0]
    let low_phone_price=phone_price.price;
    
    for(let single of obj_phone){
        if(low_phone_price >single.price){
            low_phone_price=single.price;
        }
        
    }
    console.log(low_phone_price)


}
mobile_phone(mobile_price)
