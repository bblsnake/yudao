// 简单类型的拷贝是拷贝值
let a = 1;
let b = a;
b = 2;
console.log(a);//a的值还是1

//复杂数据类型， 拷贝是引用式赋值
let obj = {
    a: 1,
    b: function() {
        console.log('bbb');
    }
};
//二线公司
//深拷贝
// 数组中有什么操作，返回新的数组
obj2 = JSON.parse(JSON.stringify(obj));//返回新的对象
obj2.a = 2;
//浅拷贝
console.log(obj2);//创业公司