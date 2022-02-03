var x = {
    name: '小明',
    birth: 123,
    'middle-school': 'No 1'  // 属性名包含特殊字符，必须使用引号引起来
}

console.log(x.name)
console.log(x['middle-school']) // 不能使用 点
console.log(x['name'])

console.log(x.age)  // defined
console.log(x)

x.age = 18
console.log(x)

delete x.age
console.log(x)

console.log('age' in x)
console.log('name' in x)
console.log('---------------')

delete x.age
console.log('toString' in x)  // 继承属性
console.log(x.hasOwnProperty('name'))
console.log(x.hasOwnProperty('toString'))

var age = 20
if (age > 18) {
    console.log('成年人')
} else {
    console.log('未成年人')
}

// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
// var bmi = weight / (height ** 2);
// console.log(bmi)

// 循环
var x = 0
var i
for (i = 1; i <= 100; i++) {
    x += i
}
console.log(x)

var arr = ['Apple', 'Google', 'Microsoft']
var i, x
for (i = 0; i < arr.length; i++) {
    x = arr[i]
    console.log(x)
}

console.log('i=', i)

var o = {
    name: 'Jack',
    age: 18,
    city: 'BeiJing',
}

for (var key in o) {
    console.log(key)
}

var a = ['A', 'B', 'C']
for (var i in a) {
    console.log(i)
    console.log(typeof i)
    console.log(a[i])
}

var x = 0;
var n = 99
while (n > 0) {
    x += n
    n -= 2
}
console.log(x)

var n = 0
do {
    n += 1
} while (n < 100)
console.log(n)

var names = ['Michael', 'Bob', 'Tracy']
var scores = [95, 75, 85]

var m = new Map([['michael', 95], ['Bob', 75], ['Tracy', 85]])
console.log(m)

console.log(m.get('Bob'))

var m = new Map()
m.set('Adam', 75)
console.log(m)

console.log(m.set(123, 456))
console.log(m)

console.log(m.has('Adam'))
console.log(m.delete('Adam'))

console.log(m)
console.log(m.delete('Adam'))
console.log(m.get('Adam'))

m.set(123, 789)
console.log(m)

var s1 = new Set()
s1.add('abc')
console.log(s1.add(123))
console.log(s1)

s1.add('abc')
console.log(s1)

s1.delete('abc')
console.log(s1)

var a = ['a', 'b', 'c']
var s = new Set(['A', 'B', 'C'])
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']])
for (var x of a) {
    console.log(x)
}

for (var x of s) {
    console.log(x)
}

for (var x of m) {
    console.log(x[0] + ':' + x[1])
}

var d = 'abc'
for (var x of d) {
    console.log(x)
}

var s = new Set(['A', 'B', 'C'])
s.forEach(function (em, se,set) {
    console.log(em, se)
})
