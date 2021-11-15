let a = [1, 2, 3];
let b = [0, ...a, 4];
console.log(b);

let origin = [1, 2, 3];
let copy = [...origin];
console.log(copy); // [1, 2, 3]
copy[0] = 0; // 修改copy不会影响origin
console.log(origin[0]); // 1

let digits = [..."0123456789"];
console.log(digits);

// 先把数组转换为集合
let letters = [..."hello world"];
console.log([...new Set(letters)]);

 

