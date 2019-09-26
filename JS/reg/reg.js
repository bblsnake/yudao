// // 一个字符
// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = "我的号码是13888888888，收下吧";
// // 得到手机号，判断服务商
// console.log(str.match(phoneReg));
// // console.log(phoneReg.test("13888888888"));


// 2925141441@qq.com 邮箱服务商

// +表示匹配一次或者多次(至少一次)
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;  
console.log(emailReg.test('2925141441@qq.com'));