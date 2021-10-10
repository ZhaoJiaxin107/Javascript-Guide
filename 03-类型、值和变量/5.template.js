let s = `hello world`;

let name = "Bill";
let greeting = `hello ${name}`;

console.log(greeting);

console.log('\n'.length);

let text = "testing:1, 2, 3";
let pattern = /\d+/g; // 匹配一个或多个数字

console.log(pattern.test(text)); // true
console.log(text.search(pattern)); // 8
console.log(text.match(pattern)); // 所有匹配项的数组
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/)); // 基于非数字拆分

console.log(typeof null); // object




