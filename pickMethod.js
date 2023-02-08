let obj = {name: 'moe', age: 50, userid: 'moe1'}

function pick(obj, ...props){
    let pickedProps = {}
    let propsName = typeof props[0] === "function"
        ? props[0]
        : (item) =>{
            for(let ele of props){
                if(item === ele) pickedProps[item] = obj[item]
            }
        }

    for(let item in obj){
        if(propsName(item)) pickedProps[item] = obj[item]
    }
    return pickedProps
}


console.log(pick(obj, "name", "age"))