// function abs(x) {
//     if (typeof x != 'number') {
//         throw 'Not a number'
//     }
//     if (x > 0) {
//         return x
//     } else {
//         return -x
//     }
// }

console.log(abs(-45, 1, 2, false))

// console.log(abs('abc'))

function foo(x) {
    console.log('x=', x)
    for (var j = 0; j < arguments.length; j++) {
        console.log(arguments[j])
    }
}

foo(4, 5, 6, 7)

function abs() {
    if (arguments.length === 0) {
        return 0
    }
    var x = arguments[0]
    return x >= 0 ? x : -x
}

console.log(abs())
console.log(abs(-1))

function foo2(a, b, ...d) {
    console.log('a=', a)
    console.log('b=', b)
    console.log(d)
}

foo2(1, 2, 3, 4, 5)

function sum(...rest) {
    if (rest.length == 0) {
        return 0
    }
    if (rest.length == 1) {
        return rest[0]
    }
    var res = 0
    for (var num of rest) {
        res += num
    }
    return res
}

var i, args = [];
for (i = 1; i <= 100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}

function foo4() {
    return
    {
        name: 'foo'
    }
}

console.log(foo4())

// 注意有没有引号
function area_of_circle(r, pi) {
    // if (typeof pi == "undefined") {
    //     pi = 3.14
    // }
    if (pi === undefined) {
        pi = 3.14
    }
    return pi * r ** 2
}

console.log(area_of_circle(3))
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}

function foo_local() {
    var x = 1
    x += 1
}

function bar() {
    var x = 'A'
    x += 'B'
}

//嵌套函数
function inside() {
    var x = 1

    function bar() {
        var y = x + 1
    }

    // var z = y + 1
}

inside()

console.log('--------------------------------------')

// 变量提升
function foo_im() {
    var x = 'Hello, ' + y
    console.log(x)
    var y = 'Bob'
    // return x
}

foo_im()

function foo_im2() {
    var
        x = 1,
        y = x + 1,
        z, i;
    console.log(x)
}

foo_im2()


// 名字空间
var MYAPP = {}

MYAPP.name = 'myapp'
MYAPP.version = 1.0

MYAPP.foo = function () {
    return 'foo'
}

console.log(MYAPP)

function f_local() {
    for (var i = 0; i < 100; i++) {
        i += 100
    }
    i += 100
    console.log(i)
}

console.log(i)
f_local()

'use strict';

function f_local2() {
    var sum = 0
    for (let k = 0; k < 200; k++) {
        sum += k
    }
    // console.log(k)
}

f_local2()

const PI = 3.14
// PI = 3
console.log(PI)

let array = ['hello', 'java', 'es6']
let [x, y, z] = array
console.log(x)
console.log(y)
console.log(z)

let [a, [b, c]] = ['hello', ['java', 'es7']]
console.log(a)
console.log(b)
console.log(c);

[, , c] = ['hello', 'java', 'es6']
console.log(c)

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {dd, address: {city, zip}} = person;

// console.log(address)

let {name, age: ag} = person
console.log(name)
console.log(ag)

let {gender = true, single = true} = person
console.log(gender)
console.log(single)

// 请记住五种字符 ( [ / + - 开头，前面的结束必须要有分号。
let m = 1,
    n = 2
console.log(m, n);

[m, n] = [n, m]
console.log(m, n)

// console.log(x, y)
// [x, y] = [y, x]
// console.log(x, y)

let cd = new Map([['name', 'xc']])
console.log(cd)

console.log(typeof q)
// let q