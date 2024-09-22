// User management object
const userManager = {
    users: [],

    addUser(name, age) {
        const newUser = { id: this.users.length + 1, name, age };
        this.users.push(newUser);
        console.log(`User added: ${JSON.stringify(newUser)}`);
    },

    getUser(id) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            console.log(`User found: ${JSON.stringify(user)}`);
            return user;
        } else {
            console.log(`User with id ${id} not found.`);
            return null;
        }
    },

    updateUser(id, updatedData) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            console.log(`User updated: ${JSON.stringify(this.users[userIndex])}`);
        } else {
            console.log(`User with id ${id} not found.`);
        }
    },

    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = this.users.splice(userIndex, 1);
            console.log(`User deleted: ${JSON.stringify(deletedUser[0])}`);
        } else {
            console.log(`User with id ${id} not found.`);
        }
    },

    listUsers() {
        console.log("Current users:", this.users);
    }
};

userManager.addUser("Alice", 30);
userManager.addUser("Bob", 25);
userManager.listUsers();

userManager.getUser(1);
userManager.updateUser(1, { age: 31 });
userManager.deleteUser(2);
userManager.listUsers();
