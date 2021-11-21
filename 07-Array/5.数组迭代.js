/* 
   push() 方法在数组末尾添加一个或多个元素
   unshift()  数组开头插入值
   pop() 删除数组的最后一个元素并返回该元素
   shift() 删除并返回数组的第一个元素

   也可以使用 delete 操作符删除数组元素
   delete: 不会修改length属性，也不会把高索引位的元素向下移动来填充被删除属性的空隙

   splice(): 插入、删除、替换数组元素的通用方法
*/

let letters = [..."hello world"];
console.log(letters.entries);
let string = "";
for (let [index, letter] of letters.entries()) {
  if (index % 2 == 0) string += letter;
}
console.log(string);

// reduce() 与 reduceRight()
// reduce() 归并数组元素
// reduce(): 第一个参数，执行归并操作的函数
//           第二个参数, 传给归并函数的初始值
//           不指定初始值调用时, reduce() 会使用数组的第一个元素作为初始值

let a = [1, 2, 3, 4, 5];
console.log(a.reduce((x, y) => x + y, 0)); // 15
console.log(a.reduce((x, y) => x * y, 1)); // 120
console.log(a.reduce((x, y) => (x > y ? x : y))); // 5

// reduceRight() 与 reduce() 类似，
// 从高索引到低索引
// 2^(3^4)
let b = [2, 3, 4];
let result = b.reduceRight((acc, val) => Math.pow(val, acc));
console.log(result)



