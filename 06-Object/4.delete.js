// delete 操作符用于从对象中移除属性
let book = {
  "main title": "Javascript",
  "sub title": "The definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

delete book.author
delete book["main title"]
console.log(book)

// delete 操作符只删除自有属性, 不删除继承属性
// 要删除继承属性必须从定义属性的原型对象上删除

// delete 操作成功或者没有影响，则 delete 表达式求值为 true
// 对非属性访问表达式(无意义地)使用delete, 同样会求值为true

// delete 不会删除 configurable 为 false的属性
// 严格模式下, 尝试删除不可配置的属性会导致 TypeError
// 非严格模式下, delete 直接求值为 false
console.log(delete Object.prototype) // false
var x = 1
console.log(delete x) // false

function f() {}

console.log(delete f) // false

globalThis.z = 3;
console.log(delete z); // true 这个属性可以删除

console.log(delete x); // false
console.log(delete globalThis.x); // true



