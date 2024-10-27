// write a program that find how much wood need to make a chair, table,bed
function calculator_for_wood(chair_measurement,table_measurement,bed_measurement){
    let wood_need_for_one_chair= 10;
    let wood_need_for_one_table=20;
    let wood_need_for_one_bed= 30;

    let total_wood_need_for_chair= wood_need_for_one_chair*chair_measurement;
    let total_wood_need_for_table=wood_need_for_one_table*table_measurement;
    let total_wood_need_for_bed=wood_need_for_one_bed*bed_measurement;

    let total_amount_wood=total_wood_need_for_bed+total_wood_need_for_chair+total_wood_need_for_table;
    return total_amount_wood




} 

let result = calculator_for_wood(5,5,2)
console.log("Total amount of wood",result,"CFT")