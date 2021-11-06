// instanceOf
// 左操作数是要检测的对象，右操作数代表某个类的构造函数
// 工厂函数 range (), 用于创建新的 Range对象
// range() 函数为每个 Range 对象定义 from 和 to 属性
function Range(from, to) {
  // 保存新范围对象的起点和终点
  // 这些属性不是继承的, 是当前对象独有的
  this.from = from;
  this.to = to;
}

// 这个原型对象定义由所有范围对象继承的方法
// 使用 range()的methods属性保存定义这个类的原型对象
// 使用了ES6定义方法的简写语法
Range.prototype = {
  // 如果x在范围内则返回true,否则返回false
  // 这个方法适用于文本，日期和数值范围
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  // 这个生成器函数让这个类的实例可迭代
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x;
    }
  },

  //   返回范围的字符串表示
  toString: function () {
    //  通过this关键字引用调用它们的对象
    return "(" + this.from + "..." + this.to + ")";
  },
};

function Strange() {
  Strange.prototype = Range.prototype;
}

console.log(new Strange() instanceof Range);
