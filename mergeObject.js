function mergeObj(obj1,obj2){
    return {...obj1,...obj2}
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
console.log(mergeObj(object1,object2));