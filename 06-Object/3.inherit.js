let o = {}; // o从 Object.prototype 继承对象方法
o.x = 1; // 自有属性x
let p = Object.create(o); // p 从 o和 Object.prototype 继承属性
p.y = 2; // 自有属性Y
let q = Object.create(p); // q从p,o和Object.prototype继承属性
q.z = 3; // 自有属性z
let f = q.toString(); // toString继承自Object.prototype
console.log(q.x + q.y); // 3:x和y分别继承自o和p

/**原型链
 *
 * 假设从对象o中查询属性x,如果o没有叫这个名字的自有属性, 则会从o的原型对象中查询属性x
 * 如果原型对象也没有叫这个名字的自有属性，但它有自己的原型，则会继续查询这个原型的原型
 * 这个过程一直持续，直至找到属性x或者查询到一个原型为null的对象
 */

let unitcircle = { r: 1 };
let c = Object.create(unitcircle);
c.x = 1; c.y = 1;
c.r = 2;
console.log(unitcircle); // 1
// 如果允许赋值, 则只会在原始对象上创建或者设置属性，而不会修改原型链中的对象
console.log(c);

