// 简写属性
// let x = 1, y = 2;
// let o = {
//     x: x,
//     y: y
// }
// es6 之后，可以删掉其中的一些分号和标识符
let x = 1, y = 2;
let o = {x, y}
console.log(o.x + o.y); // 3

// 计算的属性名
const PROPERTY_NAME = "p1";
function computePropertyName() {
    return "p" + 2;
}

let obj = {};
obj[PROPERTY_NAME] = 1;
obj[computePropertyName()] = 2;

// 符号作为属性名
const extension = Symbol("my tension symbol");
let obj1 = {
    [extension]: {/* 这个对象中的扩展数据 */}
}
obj1[extension].x = 0;




