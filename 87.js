// let make a function that give me discount in layer 
function discount_layer(quantity){
    const first_100_ticket_price=100;
    const second_100_ticket_price=90;
    const more_over_200_ticket_price=70;

    if(quantity <=100){
        let x= quantity * first_100_ticket_price;
        return x

    }
    else if(quantity<=200){
        // calculation for when more then ticket is 100
        let first_100_total_ticket_price=100*first_100_ticket_price;
        let remaining_total_ticket=quantity-100;

        let more_thenTotal_200_ticket_price_is=remaining_total_ticket*second_100_ticket_price;

        let total_price_of_ticket_is=more_thenTotal_200_ticket_price_is
        +first_100_total_ticket_price;


        return total_price_of_ticket_is;


    }
    else{
        // calculation for second moreThen 100
        let first_100_total_ticket_price=100*first_100_ticket_price;
        let second_200_total_ticket_price=200*second_100_ticket_price;
        let first100_ticket_price_and_second200_ticket_price_total=first_100_ticket_price+second_200_total_ticket_price;
        
        let remaining_total_ticket=quantity-200;

        let more_thenTotal_200_ticket_price_is=remaining_total_ticket*more_over_200_ticket_price;

        let total_price_of_ticket_is_when_more_then_300=
        // first 100  more ticket total 
        first100_ticket_price_and_second200_ticket_price_total
        +
        // more 200 ticket total 
        more_thenTotal_200_ticket_price_is
        return total_price_of_ticket_is_when_more_then_300
        


    }

}
let final_output=discount_layer(150)
console.log(final_output)