// es5 面向对象
function Person(name){//女主角
    //constructor
    //Object{ }
    this.name = name;
}
//男主
Person.prototype = {
    getName:function(){
        return this.name
    },
    playHpjy:function(){
        console.log('今晚吃鸡，大吉大利');
    }
} 
// new + fun() 返回新的对象
//实例  第三者
let person = new Person('赵小猛');
console.log(person.name);