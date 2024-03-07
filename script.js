"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mounts = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountain) {
    var tallmountain = mountain.reduce(function (prev, current) { return (current.height > prev.height) ?
        current : prev; });
    return tallmountain.name;
}
console.log(findNameOfTallestMountain(Mounts));
var products = [
    {
        name: "TV",
        price: 500
    },
    {
        name: "Xbox series x",
        price: 450
    },
    {
        name: "Gaming Chair",
        price: 250
    }
];
function calcAverageProductPrice(products) {
    var average = products.reduce(function (total, current) { return (total + current.price); }, 0) / products.length;
    return average;
    // products.forEach((p:Product) => {
    //     if()
    // })
}
console.log(calcAverageProductPrice(products));
