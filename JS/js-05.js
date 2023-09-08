function objectToArray(inputObject) {
    let finalArray = [];

    function toArray(array, object) {
        for (let key in object) {
            let value = object[key];

            if (typeof value == 'object') {
                let newArray = [];
                array.push(newArray);
                toArray(newArray, value);
            } else {
                array.push([ key, value ]);
            }
        }
    }

    toArray(finalArray, inputObject);

    return finalArray;
}

let object = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};
let array = objectToArray(object);
console.log(array);