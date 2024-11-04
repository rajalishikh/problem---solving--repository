let phonePrice=[
    {phone_id:1,phone_name:"walton phone",phone_price:20000},
    {phone_id:1,phone_name:"Xiomi phone",phone_price:20000},
    {phone_id:1,phone_name:"Apple Phone",phone_price:20000},
    {phone_id:1,phone_name:"Samsung",phone_price:20000},
    {phone_id:1,phone_name:"Oppo",phone_price:20000},
    {phone_id:1,phone_name:"realme Phone",phone_price:20000},
]

function phone_match(phones,search){
    let match=[]
   for(let phone of phones){
    if(phone.phone_name.toLowerCase().includes(search.toLowerCase()) == true){
        match.push(phone)


    }
   }
   return match
}
let c= phone_match(phonePrice,'phone')
console.log(c)