var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

const ageFlage = ages.some(checkAdult);

// some() 方法用于检测数组中的元素是否满足指定条件
// some() 方法会依次执行数组中的每个元素

// 如果有一个元素满足条件，则表达式返回true，剩余的元素不会再执行检测
// 如果没有满足条件的元素，则返回false

// some() 不会对空数组进行检测
// some() 不会改变原始数组


// Array from
// 第一个参数：可迭代对象或者类数组对象
// 返回包含该对象元素的新数组

// Array from(iterable) === [...iterable]

let copy = Array.from(ages);


