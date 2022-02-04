//! toys as objects
// const ball = {
//     id = 1,
//     cost = 5,
//     weight = 1.5,
//     shape = "round"
// };

// const train = {
//     id = 2,
//     cost = 10,
//     weight = 3.2,
//     shape = "rectangle"
// };

// const puzzle = {
//     id = 3,
//     cost = 7,
//     weight = 2.5,
//     shape = "square"
// };

//! an array of toys
// const toys = [
//     {
//         id: 1,
//         cost: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         cost: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         cost: 7,
//         weight: 2.5,
//         shape: "square"
//     }
// ]

// console.log(toys)

//! iterating over the array of toys
const toys = [
    {
        id: 1,
        cost: 5,
        weight: 1.5,
        shape: "round"
    },
    {
        id: 2,
        cost: 10,
        weight: 3.2,
        shape: "rectangle"
    },
    {
        id: 3,
        cost: 7,
        weight: 2.5,
        shape: "square"
    }
];

for (const toy of toys) {
    console.log(toy.cost)
};