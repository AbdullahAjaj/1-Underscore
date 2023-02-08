let arr = [2,4,2,5,3,8,4,7,4]

// chunk method using shift
function chunk1(arr, num){
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

// chunk method using slice
function chunk2(arr, num){
    const newArr = [];
    for(let i=0; i<arr.length/num; i++){
        newArr.push(arr.slice(i*num, (i+1)*num));
    }
    return newArr;
}

// chunk method using reduce
function chunk3(arr, num){
    return Array.from({length : arr.length/num}).reduce((acc,_,i)=>{
        return [...acc, arr.slice(i*num, (i+1)*num)];
    },[]);   
}



console.log(chunk1(arr, 4))