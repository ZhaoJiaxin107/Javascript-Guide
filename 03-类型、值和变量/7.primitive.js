let s = "hello";
console.log(s.toUpperCase()); // HELLO
console.log(s); // hello

let o = { x: 1 };
o.x = 2;
o.y = 3;
console.log(o); // { x:2, y:3}

let a = [1, 2, 3];
a[0] = 0;
a[3] = 4;
console.log(a); // [0, 2, 3, 4]

let o1 = { x: 1 },
  p1 = { x: 1 };
console.log(o1 === p1); // false

let a1 = [], b1 = []
console.log(a1 === b1); // false
// 不同的对象与不同的数组不相等


