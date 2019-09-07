// 普世
const curry = require('./b.js');
function checkByRegExp(reg,string){
    return reg.test(string);
}
let checkCellPhone = curry(checkByRegExp)(/1[3-9][0-9]{9}$/);
console.log(checkCellPhone('18623452345'));
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkEmail('2925141441@qq.com'));
console.log(checkByRegExp(/1[3-9][0-9]{9}/,'18623452345')); //[0-9] == \d
console.log(
    checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'2925141441@qq.com')
);
checkByRegExp(/1[3-9][0-9]{9}$/,'18623452345');
checkByRegExp(/1[3-9][0-9]{9}$/,'13223452345');
checkByRegExp(/1[3-9][0-9]{9}$/,'13623452345');


