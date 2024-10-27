// find the tallest person hight using conditional function
let tallest_person_height=[5.6,6.7,4.5,3.4,6,7,7.8,8,9]
function find_tallest_person(array_of_height){
    // console.log(array_of_height)
    // find the first index of height
    let first_height=array_of_height[0];
    // run a loop in array 
    for(let height of array_of_height){
        if(first_height < height){
            first_height=height
        }
    }
    return first_height

} 
 let final_output=find_tallest_person(tallest_person_height)
 console.log(final_output)
