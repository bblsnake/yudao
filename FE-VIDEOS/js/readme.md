## this指向及指定(call,apply)

- this 并不是由定义函数时决定，由最后的运行决定
    - 函数是普通函数，运行方式  this指向window
    - 函数作为对象的方法被运行  this指向对象本身

- 手动指定this
    function 是一等对象 js 灵活的this指向在规则之外提供了apply call 这些方法  
    用于手动的绑定函数最后的执行时的this指向
apply  call 区别？ 参数
- 其它方案
that
es6 arrow function
