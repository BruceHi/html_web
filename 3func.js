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
    return x >= 0 ? x: -x
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
    if (rest.length==0) {
        return 0
    }
    if (rest.length==1) {
        return rest[0]
    }
    var res = 0
    for (var num of rest) {
        res += num
    }
    return res
}

var i, args = [];
for (i=1; i<=100; i++) {
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
        {name: 'foo'}
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

