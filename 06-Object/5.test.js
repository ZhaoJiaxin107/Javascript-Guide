// 测试这组成员属性的关系
// in, hasOwnProperty(), propertyIsEnumerable()

let o = { x: 1 };
console.log("x" in o); // true
console.log("y" in o); // false
console.log("toString" in o); // true

// hasOwnProperty() 方法用于测试对象是否有给定名字的属性
// 对继承的属性，返回false

let o1 = { x: 1 };
console.log(o1.hasOwnProperty("x")); // true
console.log(o1.hasOwnProperty("y")); // false
console.log(o1.hasOwnProperty("toString")); // false

// propertyIsEnumerable() 方法细化了 hasOwnProperty() 属性
// 如果传入的命名属性是自有属性且这个属性的enumberable特性为 true
// 则返回true, 某些内置属性是不可枚举的
let o2 = { x: 1 };
console.log(o.propertyIsEnumerable("x")); // true
console.log(o.propertyIsEnumerable("toString")); // false: toString 不是自有属性
console.log(Object.prototype.propertyIsEnumerable("toString")); // false: toString 不可枚举

// in + !== undefined
let o3 = { x: 1 };
console.log(o3.x !== undefined); // true
console.log(o3.y !== undefined); // false
console.log(o3.toString !== undefined); // true o3 继承了 toString 属性

// in 可以区分不存在的属性和存在但被设置为undefined的属性
let o4 = { x: undefined };
console.log(o4.x !== undefined) // false, 属性x存在但是值为undefined
console.log(o4.y !== undefined) // false, 属性y不存在
console.log("x" in o4); // true: 属性x存在
console.log("y" in o4); // false：属性y不存在
delete o4.x
console.log("x" in o4); // false: 属性x不存在







