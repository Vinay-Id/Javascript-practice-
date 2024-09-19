function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
const today = new Date();
const formattedDate = formatDate(today);
console.log(formattedDate); // "September 19, 2024"
