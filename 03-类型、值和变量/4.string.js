let s = "Hello, world"; // 

// 取得字符串的一部分
console.log(s.substring(1, 4)); // ell
console.log(s.slice(1, 4)); // ell
console.log(s.slice(-3)); // rld, 最后3个字符
console.log(s.split(",")) // ["Hello","world"]从界定处分开

// 搜索字符串
console.log(s.indexOf("l")) // 第一个字母l的位置 2
console.log(s.indexOf("l", 3)) // 位置3后面第一个l的位置 3
console.log(s.indexOf("zz")) // -1 s并不包含子串zz
console.log(s.lastIndexOf("l")) // 最后一个字母l的位置 10

// es6 及之后版本中的布尔值搜索函数
console.log(s.startsWith("Hell")) // true: 字符串是以这些字符开头的
console.log(s.endsWith("!"))  // false: s不是以它结尾的
console.log(s.includes("or")) // true: s 包含子串 "or"

// 创建字符串的修改版本
console.log(s.replace("llo", 'ya'))
console.log(s.toLowerCase())
console.log(s.toUpperCase())

console.log(s.normalize()) // 归一化
console.log(s.normalize("NFD")) // NFD归一化

// 访问字符串中的个别字符
console.log(s.charAt(0)) // “H" 第一个字符
console.log(s.charAt(s.length - 1)) // "d" 最后一个字符

console.log(s.charCodeAt(0)) // 72 
console.log(s.codePointAt(0)) // 72

// 字符串填充函数
console.log("x".padStart(3));
console.log("x".padEnd(3));
console.log("x".padStart(3, "*"));
console.log("x".padEnd(3, "-"));

// 删除空格函数
console.log(" test  ".trim())
console.log(" test  ".trimStart())
console.log(" test  ".trimEnd())

console.log(s.concat("!"))
console.log("<>".repeat(5))








