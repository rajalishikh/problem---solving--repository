// a, y, i , e , o , u, w

function checkName(name){
  
    if(typeof name != "string")
        {
        return 'Invalid'
    }
    else if(name.toLowerCase().slice(-1)=='a' ||   name.toLowerCase().slice(-1)=='y' ||   name.toLowerCase().slice(-1) == 'i' ||   name.toLowerCase().slice(-1)== 'e' ||   name.toLowerCase().slice == 'o' ||   name.toLowerCase().slice(-1) == 'u'||  name.toLowerCase().slice == 'w')
        {
    return "Good name "
   } 
   else
   {
    return "Bad name "
   }
}
let finalInput=checkName(["Rashed"] )
console.log(finalInput)