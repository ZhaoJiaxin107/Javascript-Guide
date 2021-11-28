// 遍历或者获取对象所有属性
let o = { x: 1, y: 2, z: 3 };
console.log(o.propertyIsEnumerable("toString")); // false 不可枚举且不为自有属性
for (let p in o) {
  console.log(p);
}

for (let p in o) {
  if (!o.hasOwnProperty(p)) continue; // 跳过继承属性
}

for(let p in o) {
    if(typeof o[p] === "function") continue; //跳过所有方法
}

/* 
 Object.keys() 返回对象可枚举自有属性名的数组

 Object.getOwnPropertyNames(): 返回不可枚举自有属性名的数组

 Object.getOwnPropertySymbols(): 返回名字是符号的自有属性

 Reflect.ownKeys()：返回所有属性名，包括可枚举和不可枚举属性

*/
