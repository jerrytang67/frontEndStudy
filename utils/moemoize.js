import _ from "lodash"

function memoize(func,resolver)
{
    function memoized(...args)
    {
        const key = resolver ? resolver(...args) : args[0]
        console.log("key",key,memoized.cache.has(key));
        if(!memoized.cache.has(key))
        {
            memoized.cache.set(key,func(...args))
        }
        return memoized.cache.get(key)
    }
    memoized.cache = new WeakMap()
    return memoized
}




var obj1 = {a:1,b:2}
var other = {c:3,d:4}

// var values = _.memoize((obj)=>Object.values(obj))
var values = memoize((obj)=>Object.values(obj))

console.log(values(obj1)) // [ 1, 2 ]

console.log(values(other)) // [ 3, 4 ]

obj1.a = 2
console.log(values(obj1)) // [ 1, 2 ];

// Modify the result cache
values.cache.set(obj1,[2,3])
console.log(values(obj1)) // [ 2, 3 ]