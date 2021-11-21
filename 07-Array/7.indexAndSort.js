// indexOf()  lastIndexOf()
// indexOf() 和 lastIndexOf() 使用 === 操作符比较他们的参数和数组元素
// 从数组中搜素指定的值并返回第一个找到元素的索引
// 如果没找到则返回 -1
// indexOf() 从前到后搜索数组
// lastIndexOf() 从后向前搜索数组

let a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1)); // 1
console.log(a.lastIndexOf(1)); // 3
console.log(a.indexOf(3)); // -1

// indexOf() 和 lastIndexOf() 都接收第二个可选参数
// 指定从哪个位置开始搜索, indexOf() 从头开始搜索
// lastIndexOf() 从尾开始搜索

// 负值则表示数组末尾偏移

// 从指定的数组中搜索指定的值，并返回所有匹配元素的索引
// 从数组a中找到所有值x, 并返回匹配索引的数组
function findall(a, x) {
  let results = [],
    len = a.length,
    pos = 0;
  while (pos < len) {
    pos = a.indexOf(x, pos);
    if (pos == -1) break;
    results.push(pos);
    pos++;
  }
}

// includes()

// includes() 方法接收一个参数，
// 如果数组包含该值则返回 true, 否则返回 false
let b = [1, true, 3, NaN];
console.log(b.includes(true)); // true
console.log(b.includes(2)); //false
console.log(b.includes(NaN)); //true
console.log(b.indexOf(NaN)); // -1

// sort()
// sort() 对数组元素就地排序并返回排序后的数组
// 在不传参调用时, sort() 按字母顺序对数组元素排序

// 要对数组执行非字母顺序的排序, 需要给sort传一个比较函数作为参数
let c = [33, 4, 1111, 222];
console.log(c.sort());// [ 1111, 222, 33, 4 ]
console.log(
  c.sort(function (a, b) {
    return a - b;
  }) 
);// 数值顺序 [ 4, 33, 222, 1111 ]
console.log(c.sort((a, b) => b - a)); // 相反的数值顺序 [ 1111, 222, 33, 4 ]


