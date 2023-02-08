let obj = {name: 'moep', age: 50, userid: 'oe1'}

function omit(obj, propOrFunction){
    let propName = 
        typeof propOrFunction === "function" 
        ? propOrFunction
        : item => propOrFunction === item

    for(let item in obj){
        if(propName(item)) delete obj[item]
    }
    return obj
}

console.log(omit(obj, "name"))