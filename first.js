/*const x = 1;
let b = "hello, world";

if (2 > 1) {
    x = 1;
    y = 2;
}*/
// 注释
/*
这是
一些
注释
*/
// console.log('我想执行')
// console.log('我不想执行')

// 基本语法 -- 数组

var age = 15;
// if (age > 18) {
//     console.log('成年人');
// } else {
//     console.log('非成年人')
// }

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

// console.log(person.name)

var x = 100;
console.log(x)

// 字符串不可变
var c;
c = `反引号
多行的
挺不错的`

var name = '小明';
var age = 20;
// var message = '你好，' + name + '，你今年' + age + '岁了！'

// 注意这是反引号
var message = `你好，${name}，你今年${age}岁了！`
// console.log(message)

var s = 'hello, world!'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.substring(0, 5))
console.log(s.substring(7))

// 测试数组
var arr = [1, 2, 3.14, 'hello', null, true]
console.log(arr.length)
arr.length = 9
console.log(arr)

arr.length = 2
console.log(arr)

arr[1] = 1.12
console.log(arr)

// 支持越界访问索引，返回 undefined，还可以更改 length 的长度，用 undefined 补充
arr[5] = 3
console.log(arr)

arr.length = 3
console.log(arr)
console.log(arr[2])
console.log(arr[5])

// slice 切片
var arr = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(arr.slice(0, 3))
// 注意：只有一个数字的时候是省略end，与 python 和 go 不太一样
console.log(arr.slice(3))

copy = arr.slice()
console.log(copy)
// 不能使用 == 或 === 比较，因为都是 false
console.log(copy == arr)
// 转换成字符串再比较
console.log(copy.toString() === arr.toString())

// push, pop
// 返回长度
console.log(arr.push(1, 'a'))
console.log(arr)
// 返回 pop 的值
console.log(arr.pop())
console.log(arr)

arr.length = 0
console.log(arr.pop())

// unshift, shift
console.log(arr.unshift('a', 'b'))
console.log(arr)

console.log(arr.shift())

// 排序
var a = ['B', 'A', 'C']
// 原地修改，并返回修改后的值
console.log(a.sort())
console.log(a)

// 反转：原地反转，并返回
console.log(a.reverse())
console.log(a)

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']

// 删除count个元素，并添加新的元素。返回删除后的元素
console.log(arr.splice(2, 3, 'Apple'))
console.log(arr)

// 只删除，不添加
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
console.log(arr.splice(2))
console.log(arr)

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
console.log(arr.splice(2, 3))
console.log(arr)

// 只添加，不删除
arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
console.log(arr.splice(2, 0, 'Google'))
console.log(arr)

//
arr = ['A', 'B', 'C']
c = arr.concat('d', [1, 2, 3])
console.log(c)
console.log(arr)

console.log(typeof arr)

console.log(arr.join('-'))

var arr = ['小明', '小红', '大军', '阿黄']
arr.sort()
n = arr.length
console.log(`欢迎${arr.slice(0, n-1).join('，')}和${arr[n-1]}同学！`);

// 格式：（变量 in 对象）
// 每个元素的索引被视为对象的属性
//
// 当‘对象’是数组时：“变量”指的是数组的“索引”；
//
// 当‘对象’为对象是，“变量”指的是对象的“属性
console.log('小明' in arr)
console.log(1 in arr)
console.log(arr.indexOf('小刚'))