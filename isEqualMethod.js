let person1 = {
    name: "ahmad",
    avg: 95,
    city: "nablus",
};

let person2 = {
    name: "ahmad",
    city: "nablus",
    avg: 95,
};

// function isEqual(obj1, obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2)
// }

function isEqual(obj1, obj2){
    let maxLength = Math.max(Object.keys(obj1).length, Object.keys(obj2).length)

    for(let item in obj1){
        if(obj1[item] !== obj2[item]) return false
        maxLength--;
    }

    if(maxLength != 0) return false
    return true
}

console.log(isEqual(person1, person2))