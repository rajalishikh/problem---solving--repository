// Find the total cost of the product 

let sum =[
    {product_name:'shampoo',product_measurement:10,price_per_kg:20},
    {product_name:'Rice',product_measurement:'10kg',price_per_kg:65},
    {product_name:'BEEF',product_measurement:'10kg',price_per_kg:700},
    {product_name:'chicken',product_measurement:10,price_per_kg:280}
]

function find_the_total_cost(num_of_obj){
   let sum_total_value=0;
   for(let x of sum){
    let y=x.product_measurement
    

    
    let total_shopping=parseInt(y)*x.price_per_kg;
    sum_total_value=sum_total_value+total_shopping
   }
   return sum_total_value
   

}
let x=find_the_total_cost(sum)
console.log("Total cost of shopping is ",x)