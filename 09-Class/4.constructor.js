let F = function() {}

let p = F.prototype // 与F关联的原型对象
let c = p.constructor // 与原型关联的函数

console.log(c === F)

let o = new F();
o.constructor === F();

// Range() 构造函数作为 example
// Range类用自己的对象重写了预定义的 Range.prototype对象
// 而它定义的这个新的原型对象并没有 constructor 属性







