//Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop_measurement,tablet_measurement,mobile_measurement){
   let laptop = "35000 tk"
   let tablet = "15000 tk"
   let mobile = "20000 tk"

   let total_value_laptop=laptop_measurement*parseInt(laptop)
   let total_value_tablet=tablet_measurement*parseInt(tablet)
   let total_value_mobile=mobile_measurement*parseInt(mobile)
   console.log(total_value_laptop,total_value_tablet,total_value_mobile)

 let total_value_of_shopping= total_value_laptop+total_value_mobile+total_value_tablet;
 console.log(total_value_of_shopping) 

}
calculateElectronicsBudget(2,5,10)