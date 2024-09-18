let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

function createUser(id, name) {
    users.push({ id, name });
}

function readUsers() {
    return users;
}

function updateUser(id, newName) {
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = newName;
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

createUser(4, 'David');
console.log(readUsers()); 
updateUser(2, 'Bobby');
console.log(readUsers());
deleteUser(1);
console.log(readUsers()); 
