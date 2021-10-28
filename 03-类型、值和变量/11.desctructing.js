// 解构赋值
// 等号右手端的值是数组或对象
// 左手端通过模拟数组或对象字面量语法指定一个或多个变量
// 从右侧提取出一个或多个值，并保存到左侧列出的变量中

let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
console.log(x, y); // 3, 2

let o = { x: 1, y: 2 };
for(const [name, value] of Object.entries(o)) {
    console.log(name, value);
}

// 解构赋值左侧变量的个数不一定与右侧数组中的元素个数相等
// 左侧多余的变量会被设置为undefined, 而右侧多余的值会被忽略

let [x1, ...y1] = [1, 2, 3, 4];
console.log(x1, y1); // 1, [2, 3, 4]

let [first, ...rest] = "Hello"
console.log(first, rest); // H  ['e', 'l', 'l', 'o']



