// 其他高阶函数
let arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0
}))

console.log(arr)
console.log(arr.every(function (s) {
    return s.toUpperCase() === s
}))

console.log(arr.find(function (s) {
    return s.toLowerCase() === s
}))

console.log(arr.find(function (s) {
    return s.toUpperCase() === s
}))

console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s
}))

console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s
}))

arr.forEach(console.log)

// 闭包
function lazy_sum(arr) {
    let sum = function () {
        return arr.reduce(function (x, y) {
            return x + y
        })
    }
    return sum
}

let f = lazy_sum([1, 2, 3, 4, 5])
console.log(f())

function count() {
    let arr = []
    // 使用 var 的时候会出现 16，16，16
    // 使用 let 会正常的出现 1， 4， 9
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i
        })
    }
    return arr
}

let res = count()
console.log(res);

[f1, f2, f3] = res
console.log(f1);

let [a, b] = [1, 2, 3]
console.log(a, b)

console.log(f1())
console.log(f2())
console.log(f3())

function count2() {
    var arr = []
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n
            }
        })(i))
    }
    return arr
}

res = count2()
console.log(res);

[f1, f2, f3] = res
console.log(f1())
console.log(f2())
console.log(f3())

function create_counter(initial) {
    console.log(initial)
    let x = initial || 0
    return {
        inc: function () {
            x += 1
            return x
        }
    }
}

let c1 = create_counter()
console.log(c1.inc())
console.log(c1.inc())
console.log(c1.inc())

let c2 = create_counter(10)
console.log(c2.inc())
console.log(c2.inc())
console.log(c2.inc())

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n)
    }
}

let pow2 = make_pow(2)
let pow3 = make_pow(3)

console.log(pow2(5))
console.log(pow3(5))

let t
console.log(t)

console.log(123..toString())
console.log((123).toString())

let s = new Date()

console.log(s)
console.log(s.getFullYear())
console.log(s.getMonth())
console.log(s.getDate())

console.log(Date.now())

var re = /^<(.+)>\s+([\w\.]+@.+\..+)$/;
var r = re.exec('<Tom Paris> tom@voyager.org');
console.log(r)
console.log(r.toString())

console.log(['a', 'bcd'].toString())

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

console.log(JSON.stringify(xiaoming, null, '    '))