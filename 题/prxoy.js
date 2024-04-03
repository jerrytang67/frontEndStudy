/**
 * 创建一个代理对象，将访问的属性的数值添加到原始值上。
 * @param {number} [value=0] - 代理的初始值。
 * @returns {Proxy} - 代理对象。
 */
function createProxy(value=0)
{
    const toPrimitive = ()=>value;
    return new Proxy(() => {}, {
        get(target, key, receiver) {
            // console.log(typeof key,key)
            // if ( typeof key === 'symbol') {
            if(key===Symbol.toPrimitive){
                return toPrimitive;
            }
            return createProxy(value + Number(key));
        }
    });
}


const add = createProxy();
const r1 = add[1][2][3] +4 ; //期望值 10
const r2 = add[10][20] +30 ; //期望值 60
const r3 = add[100][200][300] +600 ; //期望值 1200

console.log(r1)
console.log(r2)
console.log(r3)
