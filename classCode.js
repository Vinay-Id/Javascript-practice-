class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); 
        this.position = position;
    }

    describe() {
        console.log(`I am ${this.name}, a ${this.position}.`);
    }
}

const employee1 = new Employee('Bob', 40, 'Developer');
employee1.describe(); 
