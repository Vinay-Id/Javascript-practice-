function startsWithCheck(str, prefix) {
    return str.startsWith(prefix);
}

let mainString = "Hello, world!";
let prefix = "Hello";

if (startsWithCheck(mainString, prefix)) {
    console.log(`The string "${mainString}" starts with "${prefix}".`);
} else {
    console.log(`The string "${mainString}" does not start with "${prefix}".`);
}
