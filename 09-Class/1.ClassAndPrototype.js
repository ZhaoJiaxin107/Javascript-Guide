// 工厂函数 range (), 用于创建新的 Range对象
// range() 函数为每个 Range 对象定义 from 和 to 属性
function range(from, to) {
  // 使用 Object.create() 创建一个对象, 继承
  // 下面定义的原型对象。这个原型对象保存为这个函数
  // 的一个属性，为所有范围对象定义共享方法(行为)
  let r = Object.create(range.methods);

  // 保存新范围对象的起点和终点
  r.from = from;
  r.to = to;

  return r;
}

// 这个原型对象定义由所有范围对象继承的方法
// 使用 range()的methods属性保存定义这个类的原型对象
// 使用了ES6定义方法的简写语法
range.methods = {
  // 如果x在范围内则返回true,否则返回false
  // 这个方法适用于文本，日期和数值范围
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  // 这个生成器函数让这个类的实例可迭代
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x;
    }
  },

  //   返回范围的字符串表示
  toString() {
    //  通过this关键字引用调用它们的对象
    return "(" + this.from + "..." + this.to + ")";
  },
};

let r = range(1, 3);
console.log("range instance", r);
console.log(r.includes(2)); // true
console.log(r.toString()); // (1...3)
console.log([...r]);// [1, 2, 3] 通过迭代器转换为数组
// 测试某个对象原型链中是否包含指定原型
console.log(range.methods.isPrototypeOf(r)); // true
// range.methods是r的原型对象



