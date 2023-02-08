let obj = {name: 'moep', age: 50, userid: 'oe1'}

function omit1(obj, propOrFunction){
    let propName = 
        typeof propOrFunction === "function" 
        ? propOrFunction
        : item => propOrFunction === item

    // this solution is not safe
    for(let item in obj){
        if(propName(item)) delete obj[item]
    }
    return obj
}

function omit2(obj, propOrFunction){
    let propName = 
        typeof propOrFunction === "function" 
        ? propOrFunction
        : item => propOrFunction === item

    // safe solution
    let result = {} ;
    for(let key in obj){
        if(!propName(key)) result[key]= obj[key];
    }
    return result
}
    
console.log(omit2(obj, "name"))