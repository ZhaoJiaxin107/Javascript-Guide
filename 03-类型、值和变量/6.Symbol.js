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
