function password(obj){
    let z=obj.birthYear.toString().length;
    
  
  let all_keys=Object.keys(obj)
  if(all_keys[0] !="name" && all_keys[1] != "birthYear" && all_keys[2] != "siteName"){
    return "Invalid"
  }
  else if(z != 4){
    return "INvalid"

  }
  else{
   let x=obj.siteName
   let  sitName_uppercase=String(x).charAt(0).toUpperCase()+ String(x).slice(1);
   let final_output=sitName_uppercase+"#"+obj.name+'@'+obj.birthYear
   return final_output

  }

 
}
let output= password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } )
console.log(output)