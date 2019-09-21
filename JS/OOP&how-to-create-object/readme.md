## 创建对象的几种方法
1. 对象字面量
```js
var obj = {
    name:''
}
```
2. new Object()
3. 构造函数
通过new调用的时候，
如果构造函数没有返回值 或者返回的不是一个对象 那么：
会隐式创建一个对象，把属性放到该对象， 返回，
如果构造函数返回了一个对象 返回该对象
```js
var t = new Object()
t.x = x;
teturn typeof Constructor()==='object'?Constructor():t;
```

## initDOM
每一个函数创建的时候 被赋予一个prototype 属性