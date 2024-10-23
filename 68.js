function unique(array){
    console.log(array)
    let new_array=[]
    for(let num of array){
        if(new_array.includes(num) == false){
            new_array.push(num)
        }
    }
    console.log(new_array)
}
unique([1,2,3,5,2])
