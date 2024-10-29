// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let first_index_value=heights2[0]

for(let x=0; x<heights2.length;x++){
    if(first_index_value.length>heights2[x].length){
        first_index_value=heights2[x]
    }
}
console.log("The smallest name of friend is ",first_index_value)
