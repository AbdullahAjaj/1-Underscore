let arr = [2,4,2,5,3,8,4,7,4]

function chunk(arr, num){
    let newArr = []
    let index = 0
    while(arr.length > 0){
        newArr[index] = []
        for(let i=0; i<num; i++){
            if(arr[0] === undefined) return newArr
            newArr[index].push(arr.shift())
        }
        index++;
    }
    return newArr
}


console.log(chunk(arr, 4))