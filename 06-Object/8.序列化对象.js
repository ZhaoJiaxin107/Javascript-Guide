/* 
  对象序列化是把对象的状态转换为字符串的过程
  JSON.parse() 与 JSON.stringify() 用于序列化和恢复javascript对象
*/
let o = { x: 1, y: { z: [false, null, ""] } };
let s = JSON.stringify(o);
let p = JSON.parse(s);

console.log(s);
console.log(p);

// 默认的 toString() 方法并不能提供太多信息
// toString(): 返回调用它的对象的值的字符串, 每当需要把一个对象转化为字符串的时候, 就会调用
// toString()方法

let sp = { x: 1, y: 1 }.toString();
console.log(sp); // [Object, Object]

let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};

console.log(String(point)); // (1,2)

// toLocaleString()
// 返回对象的本地字符串表示
let pointNew = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()},${this.y.toLocaleString()})`;
  },
};

console.log(pointNew.toString()); // (1000,2000)
console.log(pointNew.toLocaleString()); // (1,000, 2,000)

// valueOf() 方法与 toString() 方法相似, 但会在 javascript
// 需要把对象转换为某些非字符串原始值(通常是数值)时被调用

let pointNewValue = {
  x: 3,
  y: 4,
  valueOf: function () {
    return Math.hypot(this.x, this.y);
  },
};

