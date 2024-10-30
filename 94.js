function AnaToVori(ana){
    if(typeof ana != 'number'){
       return("please provided me a valid number ")
    }else{
        let Convert_vori=ana * 0.0625;
        return Convert_vori


    }
    
}
let result=AnaToVori('number')
console.log(result,"Vori")