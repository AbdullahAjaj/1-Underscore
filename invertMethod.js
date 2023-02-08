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


function invertForIn(myObject){
    let acc = {}
    for(let key in myObject){
        console.log(myObject[key])
        const value = myObject[key];
        acc[value] = key;
    }
    return acc;

}

console.log(invertForIn(myObject))

// Input.filter  ==> out ===> in.length>= out.length
// Input.map  ==> out ===> in.length == out.length []=>[]
// Input.reduce ==> newThing []=>{} , [] => number, []=>[] , 
//  Object.entries(myObject) ==> [ [key, value], [key ,value ]/.... 


function invertReduce(myObject){
    return Object.entries(myObject).reduce((acc, [key,value])=>{
        acc[value] = key;
        return acc;
    }, {});
    
}

// console.log(invert(myObject))