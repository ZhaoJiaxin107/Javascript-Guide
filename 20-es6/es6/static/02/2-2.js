Object.defineProperty(window, 'PI', {
    value:3.14,
    writable: false
})

console.log(PI)

PI = 5
console.log(PI)


// const a = 5
// a = 6
// Uncaught SyntaxError: Missing initializer in const declaration
// const a
// a = 5

if(true) {
    // Uncaught ReferenceError: a is not defined
    const a = 5
}
// console.log(a);

const obj = {
    name:'xiecheng',
    age: 34,
    skill: {
        name: 'code',
        year: 11
    }
}
// 浅层冻结
Object.freeze(obj);
Object.freeze(obj.skill);
console.log(obj);
obj.school = 'imooc'
obj.skill.year = 12;
console.log(obj)

const arr = [1, 2, 3]
arr.push(4)
console.log(arr)




