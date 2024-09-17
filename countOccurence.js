function countOccurrences(arr) {
    const counts = {};

    arr.forEach(num => {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    });

    return counts;
}

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = countOccurrences(numbers);

for (const [num, count] of Object.entries(result)) {
    console.log(`Number ${num} occurs ${count} times.`);
}
