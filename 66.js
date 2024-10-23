// write a function that find a leap year 
function find_leap_year(year){
    if(year % 4 == 0 && year%100 != 0 ){
        console.log(year,'It is a leap year')
    }
    else if(year %100 == 0 && year %400 == 0){
        console.log(year,'It is a leap year')
    }
    else{
        console.log(year,'It is a not a leap year ')
    }

}
find_leap_year(2023)