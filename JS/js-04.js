function arrayToObject(inputArray) {
    let finalObject = {};

    function toObject(object, array) {
        for (let keyValue of array) {
            let key = keyValue[0];
            let value = keyValue[1];

            if (Array.isArray(value)) {
                object[key] = {};
                toObject(object[key], value);
            } else {
                object[key] = value;
            }
        }
    }

    toObject(finalObject, inputArray);

    return finalObject;
}

let array = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
let object = arrayToObject(array);
console.log(object);