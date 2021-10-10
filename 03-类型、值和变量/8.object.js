let a = [];
let b = a;
b[0] = 1;
console.log(a[0]);

// 两个对象值, 当且仅当他们引用同一个底层对象时, 才是相等的
console.log(a === b); // true

// 把对象(或数组)赋值给一个变量, 其实是在赋值引用, 并不会创建对象的新副本
// 如果想创建对象或数组的新副本，必须显式复制对象的属性或数组的元素

let a = ["a", "b", "c"];
let b = [];
for(let i = 0; i < a.length; i++){
    b[i] = a[i] // 把 a 的元素复制到 b 中
}
let c = Array.from(b); // ES6中, 使用 Array.from 复制数组

// 函数 —— 比较两个数组
function equalArrays(a, b){
    if(a === b) return true;
    if(a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) return false;
    }
    return true;
}






