// ES6 引入class关键字
class Range {
  constructor(from, to) {
    // 保存新范围对象的起点和终点
    // 这些属性不是继承的，是当前对象独有的
    this.from = from;
    this.to = to;
  }

  // 如果 x在范围内则返回true,否则则返回false
  // 这个方法适用于文本、日期和数值范围
  includes(x) {
    return this.from <= x && x <= this.to;
  }

  // 这个生成器函数让这个类的实例可迭代
  *[Symbol.iterator]() {
      for(let x = Math.ceil(this.from);x <= this.to; x++) yield x;
  }

  // 返回范围的字符串表示
  toString() {
      return `(${this.from}...${this.to})`
  }
}

let r = new Range(1,3);
console.log(r.includes(2)) // true
console.log(r.toString())  // (1...3)
console.log([...r]);    // [1, 2, 3]


// 1. 新增class关键字并未改变javascript类基于原型的本质
// 2. 关键字 constructor 用于定义类的构造函数
// 3. class 声明语句会定义一个新变量 Range, 并将这个特殊构造函数的值赋给该变量
// 4. 如果类不需要任何初始化, 则可以省略constructor关键字及其方法体，解释器隐式创建一个空构造函数
// 5. 如果想定义继承另一个类，则可以使用 extends 关键字和 class 关键字

let Square = class {
    constructor(x) {
        this.area = x * x
    }
}

let area = new Square(3).area;
console.log("area", area); // 9


