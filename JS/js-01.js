function deepEqual(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

deepEqual({name: 'test'}, {name: 'test'}) // output true
deepEqual({name: 'test'}, {name: 'test1'}) // output false
deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
deepEqual({name: 'test'}, {name: 'test', age: 10}) // false