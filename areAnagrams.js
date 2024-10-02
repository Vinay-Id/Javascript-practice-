function areAnagrams(s1, s2) {
    return s1.split('').sort().join('')==s2.split('').sort().join('')
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("anagram", "nagaram"));
