let myObject = {
    first: "abd",
    last: "ajaj",
    age: 22
}

function invert(myObject){
    let invertedObj = {}
    let keys = Object.keys(myObject)
    let values = Object.values(myObject)

    for(let i=0; i<Object.keys(myObject).length; i++){
        invertedObj[values[i]] = keys[i];
    }
    return invertedObj
}

console.log(invert(myObject))