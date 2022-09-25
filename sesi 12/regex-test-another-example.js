const pattern = /[abc]../

console.log(pattern.test("a")); // true
console.log(pattern.test("b")); // true
console.log(pattern.test("z")); // false
console.log(pattern.test("aa")); // true
console.log(pattern.test("ab")); // true
console.log(pattern.test("abc")); // true
console.log(pattern.test("bca")); // true
console.log(pattern.test("ax")); // false
console.log(pattern.test("bz")); // false
