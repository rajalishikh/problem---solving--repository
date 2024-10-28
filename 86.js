// write a function that make a discount  for buy Ticket 
function discount_Ticket(quantity){
    if(quantity <= 100){
      console.log("Per ticket price is 100 taka",quantity*100)
      
    }
    else if(quantity >=101 && quantity <= 200){
        console.log("per ticket price is 90 taka",quantity*90)
    }else if(quantity >200){
        console.log("Per ticket price is 70",quantity*70)
    }
}
discount_Ticket(105)
