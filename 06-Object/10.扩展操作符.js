let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };

let length = rect.x + rect.y + rect.width + rect.height; // 175
console.log(length);

let o = { x: 1 };
let p = { x: 0, ...o };
console.log(p.x); // 1
let q = { ...o, x: 2 };
console.log(q.x); // 2

// 扩展操作符值扩展对象的自有属性, 不扩展任何继承属性
let o1 = Object.create({x: 1});// o 继承属性 x
let p1 = {...o1}
console.log(p1.x); // undefined

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method With Spaces"(x) { return x + 1;},
    [METHOD_NAME](x) { return x + 2},
    [symbol](x) { return x + 3}
}

/* let o2 = {
    // 一个普通的数据属性
    dataProp: value,

    // 通过一对函数定义的一个访问器属性
    get accessorProp() {
        return this.dataProp
    },
    set accessorProp(value) {
        this.dataProp = value
    }
} */

let pNew = {
    // x,y 是可读写的数据属性
    x: 1.0,
    y: 2.0,

    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(newValue) {
        let oldValue = Math.hypot(this.x, this.y);
        let ratio = newValue/oldValue;
        this.x *= ratio,
        this.y *= ratio
    },

    // theta 是一个只定义了获取方法的只读访问属性
    get theta() {
        return Math.atan2(this.y, this.x)
    }
}

console.log(pNew.r);


const serialnum = {
    _n: 0,
    // 返回当前值并递增
    get next() {
        return this._n++;
    },

    set next(n) {
        if(n > this._n) this._n = n;
        else throw new Error('serial number can only be et to a larger value')
    }
}

serialnum.next = 10;
console.log(serialnum.next) // 10
console.log(serialnum.next) // 11

