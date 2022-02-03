// 对象的方法
'use strict';
//
// abc = 'Hello, world';
// console.log(abc);

let xiaoming = {
    name: '小明',
    birth: 1990
}
console.log(xiaoming)

let xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        let y = new Date().getFullYear()
        console.log(y)
        return y - this.birth
    }
}

console.log(xiaoming2.age)
console.log(xiaoming2.age())

// var fn = xiaoming2.age
// console.log(fn())

/*let xiaoming3 = {
    name: '小明',
    birth: 1990,
    age: function () {
        let that = this

        function getAgeFromBirth() {
            let y = new Date().getFullYear()
            return y - that.birth
        }

        return getAgeFromBirth()
    }
}*/

// 使用箭头函数，this 按照词法作用域绑定
let xiaoming3 = {
    name: '小明',
    birth: 1990,
    age: function () {
        let fn = () => new Date().getFullYear() - this.birth
        return fn()
    }
}

console.log('this 的用法', xiaoming3.age())

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming4 = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming4.age())
// console.log(getAge())

console.log('getAge:', getAge.apply(xiaoming4, []))

console.log(Math.max.apply(null, [3, 4, 5]))
console.log(Math.max.call(null, 3, 4, 5))

// 高级函数
console.log('------------------------------------------')

function add(x, y, f) {
    return f(x) + f(y)
}

console.log(add(-5, 6, Math.abs))

let f = function (x) {
    return x * x
}
let arr = [1, 2, 3, 4, 5, 7, 8]
let res = arr.map(f)
console.log(res)

console.log(arr.map(String))

arr = [1, 3, 5, 7, 9]
console.log(arr.reduce(function (x, y) {
    return x + y
}))

function string2int(s) {
    // s = s.split('') 返回 ['12345']
    s = s.split('') // 返回：[ '1', '2', '3', '4', '5' ]
    console.log(s)
    let nums = s.map(function (c) {
        return c - '0'
    })
    console.log('nums', nums)
    return nums.reduce(function (x, y) {
        return x * 10 + y
    })
}

console.log(string2int('12345'))
let n = '1'
console.log('4' - '0')

function normalize(arr) {
    let f = function (s) {
        return s[0].toUpperCase() + s.substring(1).toLowerCase()
    }
    return arr.map(f)
}

console.log(normalize(['adam', 'LISA', 'barT']))
console.log('abc'.concat('bfdd'))
console.log('abc'.substring(1))

console.log(parseInt('123'))

// filter
console.log('--------------------filter--------------------')
arr = [1, 2, 3, 4, 5, 6]
let r = arr.filter(function (x) {
    return x & 1 === 1
})
console.log(r)

arr = ['A', '', 'B', null, undefined, 'C', '  ']
r = arr.filter(function (x) {
    return x && x.trim()
})
console.log(r)

arr = ['A', 'B', 'C']
r = arr.filter(function (value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
    return true
})
console.log(r)

// 去重
arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (value, index, array) {
    return array.indexOf(value) === index
})
console.log(r)

function get_primes(arr) {
    let f = function (x) {
        if (x === 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                return false
            }
        }
        return true
    }
    return arr.filter(f)
}

arr = [];
for (let x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
console.log(r)
// 数组不能直接比较，要转换为字符串
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}

for (let i = 0; i <= 2.3; i++) {
    console.log(i)
}

// 排序 根据ASCII码进行排序
arr = ['Google', 'Apple', 'Microsoft']
console.log(arr.sort())

arr = ['Google', 'apple', 'Microsoft']
console.log(arr.sort())

arr = [10, 20, 1, 2]
console.log(arr.sort())

// arr.sort(function (x, y) {
//     if (x < y) {
//         return -1
//     }
//     if (x > y) {
//         return 1
//     }
//     return 0
// })
console.log(arr.sort((x, y) => {
    return x - y
}))

arr = ['Google', 'apple', 'Microsoft']
/*arr.sort(function (s1, s2) {
    s1 = s1.toUpperCase()
    s2 = s2.toUpperCase()
    if (s1 < s2) {
        return -1
    }
    if (s1 > s2) {
        return 1
    }
    return 0
})
console.log(arr)*/

// 错误方法
/*arr.sort((s1, s2) => {
    return s1.toUpperCase() - s2.toUpperCase()
})
console.log(arr)*/
