// 把一个对象的属性复制到另一个对象上
let target = { x: 1 },
  source = { y: 2, z: 3 };
console.log(Object.keys(source))
for(let key of Object.keys(source)) {
    target[key] = source[key]
}
console.log(target);

// Object.assign() 接收两个或者多个对象作为其参数
// 修改并返回第一个参数
// 不会修改第二个及后续的参数




