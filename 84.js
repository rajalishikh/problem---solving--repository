let shopping ={
   Shirt:{shirt_total:'4',price:200},
   pant:{total_pant:5,price:4000},
   shoo:{total_shoo:5,price:5000},
   belt:{total_belt:2,price:200},

}
function total_price(num1){
    let output=num1.Shirt.price
    let output2=num1.pant.price
    let output3=num1.shoo.price
    let output4=num1.belt.price
    console.log("Total shopping amount ",output+output2+output3+output4,'taka')
    
}
total_price(shopping)