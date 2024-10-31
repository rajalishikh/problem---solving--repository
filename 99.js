function deleteInvalids(array){

    let final_array=[]

    if (typeof array != array){
        return"Invalid Array"
        

    }
    
    else{
        
        for(let x=0;x<array.length;x++){
           
        
            if(typeof array[x] == 'number' && isNaN(array[x]) == false){
                final_array.push(array[x])
            }
        }
        
        return final_array
    }
}
let final_output= deleteInvalids({num: [ 1 , 2 , 3 ]} )
console.log(final_output)