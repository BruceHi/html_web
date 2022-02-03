// class 继承
// 实例化
'use strict';

class Student {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log('hello, ' + this.name + '!')
    }
}

let xiaoming = new Student('小明')
xiaoming.hello()

// 继承
class PrimaryStudent extends Student{
    constructor(name, grade) {
        super(name);
        this.grade = grade
    }

    myGrade() {
        console.log('I am at grade', this.grade)
    }
}

let a = new PrimaryStudent('阿帆', 78)
a.hello()
a.myGrade()

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    say() {
        return `Hello, ${this.name}!`
    }
}

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
console.log(kitty.name)

if ((new Cat('x') instanceof Animal)
    && kitty
    && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say)
{
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

console.log(window.innerWidth)

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s;

s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);

// 注意 document.getElementsByClassName('c-red c-green')
// s 之后不能再选择了，要加 [0] 单个对象之后再选择

// 答案：
// document.getElementsByClassName('c-red c-green')[0].getElementsByTagName('p')
// document.getElementsByClassName('c-red c-green')[0].children
// document.querySelectorAll(".c-red.c-green p");
//
// document.getElementsByClassName('c-green')[1].lastElementChild
// document.querySelector("#test-div div:last-child p:last-child")

let js = document.getElementById('test-js')
// console.log(js)
js.innerHTML = 'JavaScript';

js.style.color = '#ff0000';
js.style.fontWeight = 'bold';


js = document.getElementById('js')
let list = document.getElementById('list')
list.append(js)

// 注意 逗号
// haskell 插入到最后
let haskell = document.createElement('p')
haskell.id = 'haskell'
haskell.innerText = 'Haskell'
list.appendChild(haskell)

let d = document.createElement('style')
d.setAttribute('type', 'text/css')
d.innerHTML = 'p { color: red }'
document.getElementsByTagName('head')[0].appendChild(d)

// haskell 插入到 python 之前
let
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p')
haskell.id = 'haskell'
haskell.innerText = 'Haskell'
list.insertBefore(haskell, ref)

for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i])
}

// let
//     ol = document.getElementById('test-list'),
//     lis = document.getElementsByClassName('lang')  // html collection
//
// let arr = []
// for (let i = 0; i < lis.length; i++) {
//     arr.push(lis[i])
// }
// arr.sort(function (x, y) {
//     if (x.innerText < y.innerText) {
//         return -1
//     }
//     if (x.innerText > y.innerText) {
//         return 1
//     }
//     return 0
// })
//
// for (let arrElement of arr) {
//     ol.appendChild(arrElement)
// }

let ols = document.getElementById('test-list')
// list = document.getElementsByClassName('lang')
// let sort = Array.from(list).sort((a, b) => a.innerText > b.innerText ? 1 : -1)
let sort = Array.from(ols.children).sort((a, b) => a.innerText > b.innerText ? 1 : -1)
for (let element of sort) {
    ols.appendChild(element)
}

let parent = document.getElementById('parent')
parent.removeChild(parent.children[0])

let ul = document.getElementById('test-remove')
for (let i = 1; i <= 3; i++) {
    ul.removeChild(ul.children[i])
}
// ul.removeChild(ul.children[1])

// let s = $('#para-1')
// console.log(s)

let
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

//
// // input.val(); // 'test'
// // input.val('abc@example.com'); // 文本框的内容已变为abc@example.com
// //

// print 是使用打印机打印web 页面
console.log(select.val()); // 'BJ'
// select.val('SH'); // 选择框已变为Shanghai
//
// textarea.val(); // 'Hello'
// textarea.val('Hi'); // 文本区域已更新为'Hi'

a = $('#test-link')
a.click(function () {
    alert('Hello!')
})

let arr = ['a', '', 'b']
arr.forEach(function (value, index, array) {
    console.log(value)
})

// dddc = 123
