function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, 4])); 
