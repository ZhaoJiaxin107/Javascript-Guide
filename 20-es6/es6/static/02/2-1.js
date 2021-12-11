// var ——> variable
var a = 5
console.log(a) // 5

delete a
console.log(window.a)  // 5

b = 6
console.log(b)
delete b
// console.log(b) // ReferenceError: b is not defined

// let 不属于顶层对象 window
let c = 5;
console.log(c);
console.log(window.c); // undefined 


// let 不允许重复声明
let d = 5;
// let d = 6;
// console.log(d); // Identifier 'd' has already been declared

// let 不存在变量提升

// let 暂时性死区与块级作用域
var e = 5;
// if(true) {
//     // Uncaught ReferenceError: Cannot access 'e' before initialization
//     e = 6;
//     let e;
// }


for(var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    })
}

// 3 3 3

for(var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0 1 2
        })
    })(i)
}

for(let i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0 1 2
        })
    })(i)
}














