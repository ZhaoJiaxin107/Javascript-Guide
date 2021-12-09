// 把一个对象的属性复制到另一个对象上
let target = { x: 1 },
  source = { y: 2, z: 3 };
console.log(Object.keys(source));
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
console.log(target);

// Object.assign() 接收两个或者多个对象作为其参数
// 修改并返回第一个参数
// 不会修改第二个及后续的参数

let newObj = Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });
console.log('newObj',newObj);

function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}

console.log('merge', merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));
