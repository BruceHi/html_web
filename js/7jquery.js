'use strict';

let
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

// jQuery对象类似数组，它的每个元素都是一个引用了DOM节点的对象。
// 第一种方法
/*selectAll.click(function (){
    if (selectAll.is(':checked')) {
        // form.find(':checkbox').prop('checked', true)
        langs.prop('checked', true)
        selectAllLabel.hide()
        deselectAllLabel.show()
    } else {
        // form.find(':checked').prop('checked', false)
        langs.prop('checked', false)
        // console.log(langs instanceof jQuery)
        selectAllLabel.show()
        deselectAllLabel.hide()
    }
})

langs.change(function (){
    // console.log(langs.get())  // 返回 array 类型
    let flag = langs.get().every(e => e.checked)
    if (flag) {
        selectAll.prop('checked', true)
        selectAllLabel.hide()
        deselectAllLabel.show()
    } else {
        selectAll.prop('checked', false)
        selectAllLabel.show()
        deselectAllLabel.hide()
    }
})*/

selectAll.click(function (){
    // console.log(this instanceof jQuery) //false
    // console.log(this) // dom 对象 <input type="checkbox">
    // langs.prop('checked', $(this).prop('checked'))
    langs.prop('checked', $(this).is(':checked'))  //或
})

selectAll.change(function () {
    if ($(this).is(':checked')) {
        selectAllLabel.hide()
        deselectAllLabel.show()
    } else {
        selectAllLabel.show()
        deselectAllLabel.hide()
    }
})

langs.change(function () {
    // 用get()拿到包含 jquery dom对象的Array  https://www.liaoxuefeng.com/wiki/1022910821149312/1028321864402080
    // https://www.w3school.com.cn/jsref/prop_checkbox_checked.asp
    let judge = langs.get().every(e => e.checked)  // HTML DOM Checkbox 对象的属性
    if (judge) {
        selectAll.prop('checked', true)
    } else {
        selectAll.prop('checked', false)
    }
    selectAll.change()
})

invertSelect.click(function () {
    // console.log(langs instanceof iterable)
    // console.log(langs instanceof jQuery)  // langs 是jquery 对象
    for (let lang of langs) {
        // console.log(lang instanceof jQuery)
        // lang 不为jquery 对象, 不能使用jquery 对象方法，比如 is，prop 方法。

        // lang 为 dom 对象
        // console.log(lang instanceof Element)

        $(lang).prop('checked', !lang.checked)

        // console.log($(this) instanceof $)
        // console.log($(this))  // 此时的 this 为 invertSelect
    }
    langs.change();
})