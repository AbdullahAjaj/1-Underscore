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

let person3 = {
    name: "ahmad",
    avg: 95,
    location: {
        city: "nablus",
        id: 33
    }
};

let person4 = {
    name: "ahmad",
    avg: 95,
    location: {
        city: "nablus",
        id: 33
    }
};

// function isEqual(obj1, obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2)
// }

function isEqual(obj1, obj2){
    let flag = true
    if(Object.keys(obj1).length != Object.keys(obj2).length) return false

    for(let item in obj1){
        if(typeof obj1[item] === "object"){
            Object.entries(obj1[item]).forEach(([key, value]) => {
                if(obj1[item][key] !== obj2[item][key]){ 
                    flag = false
                    return
                }
            });
        } 
        else if(obj1.item !== obj2.item) flag = false
    }
    return flag
}

console.log(isEqual(person3, person4))