function mapObject(inputObject) {
    let finalObject = {};

    function map(keyPath, object) {
        for (let key in object) {
            let value = object[key];
            let newKeyPath = keyPath ? `${keyPath}/${key}` : key;

            if (isObject(value)) {
                map(newKeyPath, value);
            } else {
                finalObject[newKeyPath] = value;
            }
        }
    }

    map(null, inputObject);

    return finalObject;
}

function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

let object = mapObject({
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1,2,3]
    }
});
console.log(object);