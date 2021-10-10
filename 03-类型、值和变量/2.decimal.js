// let x = .3- .2;
// let y = .2 - .1;
// console.log(x === y); // false
// console.log(x); // 0.09999999999999998
// console.log(y); // 0.1

// console.log(BigInt(Number.MAX_SAFE_INTEGER))
// let string = "1" + "0".repeat(100);
// console.log(BigInt(string));

// console.log(1 < 2n) // true
// console.log(2 > 1n)  // true
// console.log(0 == 0n) // true
// console.log(0 === 0n) // === 也检查类型是否相对 false

let timestamp = Date.now(); // 当前时间的时间戳 1633338844121
console.log(timestamp);
let now = new Date(); // 当前时间的日期对象 2021-10-04T09:14:04.127Z
console.log(now);
let ms = now.getTime(); // 转换为毫秒时间戳  1633339072880
console.log(ms);
let iso = now.toISOString(); // 转换为标准格式的字符串 2021-10-04T09:17:52.880Z
console.log(iso);























