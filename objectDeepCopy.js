let original = { 
    name: "John", 
    age: 30, 
    address: { street: "123 Main St", city: "New York" } 
};

let deepClone = JSON.parse(JSON.stringify(original));

console.log(deepClone);
