let obj = {
    a: 1,
    filed4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}
function clone(target) {
    let cloneTarget = {};//浅拷贝要的  内存空间
    for (const key in target){
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
}
let obj1 = clone(obj);
obj1.a = 2;
obj1.filed4.child = 'newchild';
console.log(obj.filed4.child);