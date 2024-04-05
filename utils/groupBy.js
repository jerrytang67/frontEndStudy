function groupBy(arr , generateKey)
{
    if(typeof generateKey === 'string')
    {
        const propName = generateKey
        generateKey = (item) => item[propName]
    }
    const result = {}
    arr.forEach((item,idx) => {
        const key = generateKey(item,idx,arr)
        if(!result[key])
        {
            result[key] = []
        }
        result[key].push(item)
    })
    return result
}


console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { '4': [ 4.2], '6': [ 6.1, 6.3 ] }

console.log(groupBy(['one', 'two', 'three'], 'length'))  // { '3': [ 'one', 'two' ], '5': [ 'three' ] }

console.log(groupBy([{id: 1, name: 'foo'}, {id: 2, name: 'bar'}, {id: 3, name: 'foo2'},{id:4,name:'wofei'}], (item)=>item.name.indexOf("f"))) // { foo: [ { id: 1, name: 'foo' }, { id: 3, name: 'foo' } ], bar: [ { id: 2, name: 'bar' } ] } 