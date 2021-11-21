// slice() 方法返回一个数组的切片或者子数组
// 两个参数：返回参数的起止位置
// 一个参数：返回的数组将包含从该起点直到数组末尾的所有元素
// 参数负值：
// 参数-1：数组的最后一个元素
// 参数-2：数组的倒数第二个元素

let a = [1, 2, 3, 4, 5];
console.log(a.slice(0, 3)); // [1, 2, 3]
console.log(a.slice(3)); // [4, 5]
console.log(a.slice(1, -1)); // [2, 3, 4]
console.log(a.slice(-3, -1)); // [3，4]

// splice()
// splice() 是一个对数组进行插入和删除的通用方法
// splice() 可以从数组中删除元素, 可以向数组中插入新元素, 也可以同时执行这两种操作
// splice() 的第一个参数指定指定插入或删除操作的起点位置，第二个参数指定要从数组中删除的元素个数
// 省略第二个参数，从起点元素开始的所有数组元素都将被删除

// splice() 返回被删除元素的数组, 如果没有删除元素则返回空数组
let b = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(b.splice(4)); // [5, 6, 7, 8]
console.log(b); // [1, 2, 3, 4]
console.log(b.splice(1, 2)); // [2, 3]
console.log(b); // [1, 4]
console.log(b.splice(1, 1)); // [4]
console.log(b); // [1]

// splice(startIndex, length, item1, item2)
// 第一个参数的指定位置插入到数组中的元素
let c = [1, 2, 3, 4, 5];
console.log(c.splice(2, 0, "a", "b"));
console.log(c);
/* [
    1, 2, 'a', 'b',
    3, 4, 5
  ] 
*/
// splice() 会改变数组本身

// concat(): 创建并返回一个新数组
let d = [1, 2, 3];
console.log(d.concat(4, 5, 6)); // [1,2,3,4,5,6]
console.log(d);

// fill(值，起始索引，终止索引)
let e = new Array(5);
console.log(e.fill(0)); // [0,0,0,0,0]
console.log(e.fill(9, 1)); // [0,9,9,9,9]
console.log(e.fill(8, 2, -1)); // [0,9,8,8,9]

// copyWithin()
// 把数组切片复制到数组中的新位置
// 就地修改数组并返回修改后的数组,但不会改变数组的长度

// [第一个元素复制到的目的索引，复制的第一个元素的索引，复制元素切片的终止索引]
let f = [1, 2, 3, 4, 5];
console.log(f.copyWithin(1)); // [1, 1, 2, 3, 4] 把数组元素复制到索引1及之后
console.log(f.copyWithin(2, 3, 5)); // [1,1,3,4,4] 把最后两个元素复制到索引2之后
console.log(f.copyWithin(0, -2)); // [4, 4, 3, 4, 4]



