// write a function for picnic budget
function PicnicBudget(contribution_people){
    let picnic_contribution_less_then_100_is=5000;
    let picnic_contribution_more_then_100_is=4000;
    let picnic_contribution_more_then_200_is=3000;

    // for less then 100 calculation
    if(contribution_people <=100){
        let picnic_perHead_cost=contribution_people*picnic_contribution_less_then_100_is;
        return picnic_perHead_cost
    }
    // for more then 100 picnic calculation is 
    else if(contribution_people<=200){
        let calculation_for_first_100=100*picnic_contribution_less_then_100_is;
        // calculation more then 100
        let total_people_more_then_100=contribution_people-100;
        let total_cost_more_then_100=total_people_more_then_100*picnic_contribution_more_then_100_is;
        // final cost
        let more_then_100_final_cost=calculation_for_first_100+total_cost_more_then_100;
        return more_then_100_final_cost

        
    }
    else{
        // calculate when more then 200

        // calculation for first 100
        let picnic_perHead_cost3_less_then_100=100*5000;

        // calculation for second 200
        let picnic_cost_for_200=100 * 4000;
        

        
        // final cost when more then 200 
        let more_then_200_final_cost_3=contribution_people-200;
        let total_cost_more_then_200=more_then_200_final_cost_3 *3000;
        
        // total budget for picnic
        let total_budget=picnic_perHead_cost3_less_then_100+picnic_cost_for_200+total_cost_more_then_200;
        return total_budget
       
       
    }
  



}
let final_output=PicnicBudget(202)
console.log(final_output)