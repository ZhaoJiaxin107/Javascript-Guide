// 1. 对象字面量
let empty = {};
let point = { x: 0, y: 0 };
let book = {
  "main title": "Javascript",
  "sub title": "The definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

// 2.使用 new 创建对象
let o = new Object();
let a = new Array();
let d = new Date();
let r = new Map();

// 使用 new Object() 创建的对象继承自 Object.prototype
// 使用 new Array() 创建的对象继承自 Array.prototype
// 使用 new Date() 创建的对象继承自 Date.prototype

// 多数内置构造函数的原型都继承自 Object.prototype
// 原型链：原型对象链接起来的序列

// 3.Object.create()
let o1 = Object.create({ x: 1, y: 2 }); // o1继承属性x和y
console.log(o1.x + o1.y); // 3

let o2 = Object.create(null);
console.log(o2); // o2不继承任何属性或者方法

// 如果想创建一个普通的空对象, 传入Object.prototype
let o3 =Object.create(Object.prototype);
console.log(o3); // {}




