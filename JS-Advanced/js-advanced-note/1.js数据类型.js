/* 
  JS中的数据类型:
    + 原始值类型:
      number: NaN[不是一个有效数字]、Infinity[无穷大的值]
      string：基于 单引号/双引号/反引号(模板字符串) 包起来的都是字符串
      boolean：true/false
      null
      undefined
      symbol: 唯一值
      bigint: 大数
    + 对象类型
      标准普通对象: object
      标准特殊对象: Array/RegExp/Date/Error/Math/ArrayBuffer/DateView/Set/Map...
      非标准特殊对象 Number/String/Boolean/Symbol/BigInt...
      可调用对象[实现了call方法]: function
*/
if (NaN === NaN) {
  // 不相等的: 所以不能基于"是否等于NaN"来检测值是否为有效数字
  // isNaN([value]):不论[value]啥类型，默认隐式转换为数字 [Number([value])], 再校验是否为
  // 有效数字, 如果是有效数字, 返回 false, 不是有效数字才返回 true
  // Object.is(NaN, NaN): true 【不兼容IE(Edge除外)】
}

let n = Symbol("AA");
let m = Symbol("AA");
console.log(n === m); // false

// 1.对象的唯一属性
let key = Symbol();
let obj = {
  [key]: 100,
};
console.log(obj[key]); // 100

let arr = Object.getOwnPropertySymbols(obj);
arr.forEach((item) => {
  console.log(obj[item]);
});

// 2.宏观管理标识, 保证标志唯一性(vuex/redux)

// 3.底层原理
// Symbol.hasInstance
// Symbol.iterator
// Symbol.toPrimitive
// Symbol.toStringTag

// 最大安全数字：9007199254740991，超过这个数字就不准确了
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
// 问题：服务器中有 longInt 长整型这种值, 如果把这样的值返回给客户端
// 则客户端无法进行有效的处理

// 一般服务都是以字符串返回, 但是字符串进行计算还是需要转成数字才可以
// 但还是不准确

// 字面量：原始值
let k = 10;
// 构造函数：对象值
let l = new Number(10);
let x = Object(10);

// console.log(new Symbol()) // TypeError: Symbol is not a constructor
// console.log(new BigInt()); // TypeError: BigInt is not a constructor

// =============================
// 检测数据类型
// + typeof
//   + 返回结果是一个字符串, 字符串包含了对应的数据类型
//   + typeof检测未被声明的变量, 不会报错, 结果是 "undefined"
//   + 封装中会用到
//   + typeof null ——> "object" ?
//   + typeof 不能细分是啥对象【排除函数对象】, 返回结果是"object/function"
//   + 而 typeof 就是基于二进制检测的: 它把 000 开始的都识别为对象, 而 null 全是 0, 所以也被识别为对象...
//   + 但是内部识别为对象后，会再次检测这个对象有没有内部实现[[call]], 如果实现了，结果是function, 没有实现就是object
// + instanceof
// + constructor
// + Object.prototype.toString.call([value])
// ---------
// + Array.isArray([value])
// + ...

console.log(typeof typeof typeof [1, 2, 3]); // string
console.log(typeof [1, 2, 3]); // object

// 支持浏览器导入 && 支持node运行(CommonJS规范)
(function(){
  let utils = {

  }
  // 暴露API
  if(typeof moudule === "object" && typeof module.exports === "object") module.exports = utils;
  if(typeof window !== "undefined") window.utils = utils;
})()

// 需求: 验证 val 是否为一个对象
if(val !== null && /^(object|function)$/i.test(typeof val)){

}

