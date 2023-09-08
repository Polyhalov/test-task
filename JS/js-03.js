function bulkRun(arrayWithFunctions) {
    let results = [];

    for (let funcData of arrayWithFunctions) {
        let func = funcData[0];
        let params = funcData[1];
        let funcResult = func(...params);
        results.push(funcResult);
    }

    return results;
}

let result = bulkRun([
    [ (a, b) => a + b, [ 1, 2 ] ],
    [ (a, b) => a - b, [ 5, 2 ] ],
    [ (a, b) => a * b, [ 3, 2 ] ]
]);
console.log(result);