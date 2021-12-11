/* 
    * 按照一定模式，从数组和对象中提取值, 对变量进行赋值
    * 数组解构
    * 对象解构
    * 字符串解构
    * 应用
*/
// let [a, b, [c]] = [1, 2, [3, 4]];
// console.log(a, b, c);

// let [a, b, c] = [1, 2, [3, 4]];
// console.log(a, b, c);

// let [a, b, c, d = 5] = [1, 2, [3, 4], 7]
// console.log(a,b,c,d) // [1, 2, [3,4], undefined]


// let str = 'imooc'
// let [a, b, c, d, e] = str
// console.log(a, b, c, d, e) // i m o o c

// function foo() {
//     console.log(123)
// }

// let [a = foo()] = [12]


// 参数的解构赋值
// function foo([a, b, c]) {
//     console.log(a, b, c)
// }

// let arr = [1, 2, 3]
// foo(arr)

// function foo({name, age, school = 'imooc'}) {
//     console.log(name, age, school)
// }
// let obj = {
//     name: 'jiaxin',
//     age: 34,
//     school: 'western university'
// }
// foo(obj);

// function foo() {
//     let obj = {
//         name: 'jiaxin',
//         age: 34,
//         school: 'western university'
//     }
//     return obj
// }
// let {name, age} = foo()
// console.log(name, age);

// json
let json = '{"a":"hello", "b":"world"}'
let {a, b} = JSON.parse(json);
console.log(a, b);   // hello world





