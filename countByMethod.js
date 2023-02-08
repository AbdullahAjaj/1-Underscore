const Students = [
{
    name: "ahmad",
    avg: 90,
    location: {
        city: "ramallah",
    },
},
{
    name: "rami",
    avg: 95,
    location: {
        city: "amman",
    },
},
{
    name: "zain",
    avg: 88,
    location: {
        city: "ramallah",
    },
},
{
    name: "baker",
    avg: 70,
    location: {
        city: "nablus",
    },
},
{
    name: "ahmad",
    avg: 95,
    location: {
        city: "nablus",
    },
},
];

function listDataAccordingByPropName2(objectName, propNameOrCondition = "undefined") {
    const objGrouped = {};

    let getGroupName =
        typeof propNameOrCondition === "function"
        ? propNameOrCondition
        : (item) => {
            let arrPath = propNameOrCondition.split(".");
            return (propName = arrPath.reduce((acc, current) => {
                return acc?.[current];
            }, item));
        };

    for (const item of objectName) {
        let returnedProp = getGroupName(item);

        if (objGrouped[returnedProp] === undefined)
        objGrouped[returnedProp] = [];

        objGrouped[returnedProp].push(item);
    }

    for(let item in objGrouped){
        objGrouped[item] = objGrouped[item].length
    }

    return objGrouped;
}

console.log(listDataAccordingByPropName2(Students, "location.city"))