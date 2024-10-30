function calculateMoney(ticketSale){
    const perTicketPrice=120;
    const  guard_cost_per_day=500;
    const  eight_staff_cost=50*8;

    if(typeof ticketSale != 'number' || ticketSale<0){
        return('Error : please give me the valid number')
    }else {
        let total_income=(ticketSale*perTicketPrice)-(guard_cost_per_day+eight_staff_cost);
        return total_income
    

    }
}
let finalOutput=calculateMoney(-10)
console.log(finalOutput)