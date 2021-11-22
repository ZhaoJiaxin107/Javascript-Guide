// join() 方法把数组的所有元素转化为字符串
// 然后把他们拼接起来并返回结果字符串
let a = [1, 2, 3];
console.log(a.join())
console.log(a.join(" "))

let b = new Array(10);
console.log(b.join("-"));

// join() 方法执行的是 String.split("")的反向操作

console.log(a.toString());

// toLocaleString() 是 toString() 的本地化版本


