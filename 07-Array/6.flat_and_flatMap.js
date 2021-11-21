// flat(): 用于创建并返回一个新数组
let arr1 = [1, [2, 3]]; // [1, 2, 3]
let arr2 = [1, [2, [3]]]; // [1, 2, [3]]
console.log(arr1.flat());
console.log(arr2.flat());

// 不传参调用时, flat() 会打平一级嵌套
// 想打平更多层级, 需要给 flat() 传一个数值参数

let arr3 = [1, [2, [3, [4]]]];
console.log(arr3.flat(2)); // [1, 2, [3]]
console.log(arr3.flat(3)); // [1, 2, 3, 4]

// flatMap() 与 map() 方法类似，只不过返回的数组会被自动打平
// a.flatMap(f) ===> a.map(f).flat()

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap((phrases) => phrases.split(" "));
console.log(words) // [ 'hello', 'world', 'the', 'definitive', 'guide' ]

 // flatMap(): 通用版map(), 可以把输入数组中的一个元素映射为输出数组中的多个元素
// flatMap(): 允许把输入元素映射为空数组

// 将非负数映射为它们的平方根
let arr4 = [-2, -1, 1, 2]
let res = arr4.flatMap(x => x < 0 ? [] : Math.sqrt(x));
console.log(res)

// concat(): 创建并返回新数组
