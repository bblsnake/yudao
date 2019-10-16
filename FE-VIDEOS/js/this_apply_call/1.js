// es5的经典话题
var name = "windowName";//Global  window

function a(){
    var name = "Cherry";//局部函数作用域
    console.log(name);
    console.log(this.name);
}