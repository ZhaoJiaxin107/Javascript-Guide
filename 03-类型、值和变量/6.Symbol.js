let strname = 'string name';
let symname = Symbol('propname');

console.log(typeof strname) // string
console.log(typeof symname) // symbol

let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]); // 1
console.log(o[symname]); // 2

let s = Symbol("sym_x");
console.log(s.toString()) // "Symbol(sym_x)"

let s1 = Symbol.for("shared"); // Symbol(shared)
let t1 = Symbol.for("shared");  
console.log('s1', s1);
console.log(s1 === t1); // true
console.log(s1.toString());
console.log(Symbol.keyFor(t1)); // 得到字符串






