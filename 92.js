// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones_obj){
    let sum=0;
    let output=Object.keys(phones_obj).length
    console.log(output)
    for(let x of phones_obj){
        
        sum=sum+x.price
        
    }

    let the_total_Average=sum /output
    console.log(the_total_Average)
}
findAveragePhonePrice(phones)