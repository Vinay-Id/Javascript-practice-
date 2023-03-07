const kmToMiles=(num)=>{
    
    return isNaN(num)?'Please Enter valid distance':`${num}Km is equal to ${(num*0.621371).toPrecision(num<10000?5:8)} miles`;
}
console.log(kmToMiles("test"));
console.log(kmToMiles(100));