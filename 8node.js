'use strict'  // 老老实实地在开头添加严格模式吧，因为 node.js 的 --use_strict 参数已经没用了。
let arr = ['1', '', 3, 'b'];
// arr.forEach(function (value, index, array) {
//     console.log(value)
// })

console.log(arr)
// for (let arrElement of arr) {
//     console.log(arrElement)
//
// }

// 使用严格模式，有些没有定义的变量没有标红，是因为在其他的 js 文件里面定义了。
let cdddd;
cdddd = 123
