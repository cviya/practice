// 定义一个函数，用来向一个元素中添加指定的class属性值
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
};

// 判断一个元素中是否含有指定的class
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
};

// 删除一个元素中的指定的class属性
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}

// toggleClass可以用来切换一个类
// 如果元素中有该类，则删除
// 如果元素中没有该类，则添加
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
};