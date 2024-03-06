



const obj2 = {}
Object.setPrototypeOf(obj2, Array.prototype);
console.log(isArray2(obj2)); // true

function isArray2(arr) {
    return arr instanceof Array;
}
function isArray(arr) {
    return Array.isArray(arr);
}


let obj = {}
console.log(isArray(obj));
obj = []
console.log(isArray(obj));

function isArray(arr) {
    return Array.isArray(arr);  //最佳解法 无法被模拟
}