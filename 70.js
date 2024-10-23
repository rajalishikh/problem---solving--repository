// You are given an array of numbers. Count how many times the a number is repeated in the array.
function find_same_value(number){
    let number_array=[5,6,11,12,98, 5]
    let same_number_array=[]
    for(let n=0;n<number_array.length;n++){
        if(number_array[n]== number){
            same_number_array.push(number_array[n])

        }
    }
    console.log(same_number_array.length)
    
    

}
find_same_value(5)