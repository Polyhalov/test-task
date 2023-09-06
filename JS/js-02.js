function* chunkArray(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num){    
        newArr.push(arr.slice(i, i + num))
        yield newArr;
        newArr = [];
    }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


