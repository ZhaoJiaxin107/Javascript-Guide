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
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  // 返回范围的字符串表示
  toString() {
    return `(${this.from}...${this.to})`;
  }

  static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse range from "${s}".`);
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
  }
}



let r = Range.parse("(1...10)");
console.log(r);// Range { from: 1, to: 10 }
console.log(r.parse("(1...10)")); // r.parse is not a functions

     




