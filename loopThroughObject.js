const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {  
        console.log(key + ": " + person[key]);
    }
}
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// Object.keys(person).forEach(function(key) {
//     console.log(key + ": " + person[key]);
// });
