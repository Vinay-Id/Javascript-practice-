let student = [
  {
    id: 1,
    name: "john",
    age: 51,
  },
  {
    id: 2,
    name: "harry",
    age: 0,
  },
  {
    id: 3,
    name: "khali",
  },
];
console.log(student[0].age || "N/A");
console.log(student[1].age || "N/A");
console.log(student[2].age || "N/A");

console.log(student[0].age ?? "N/A");
console.log(student[1].age ?? "N/A");
console.log(student[2].age ?? "N/A");

console.log(student[0]?.age ?? "N/A");
console.log(student[1]?.age ?? "N/A");
console.log(student[2]?.age ?? "N/A");