//! toys as objects
// const ball = {
//     id = 1,
//     price = 5,
//     weight = 1.5,
//     shape = "round"
// };

// const train = {
//     id = 2,
//     price = 10,
//     weight = 3.2,
//     shape = "rectangle"
// };

// const puzzle = {
//     id = 3,
//     price = 7,
//     weight = 2.5,
//     shape = "square"
// };

//! an array of toys
// const toys = [
//     {
//         id: 1,
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     }
// ]

// console.log(toys)

//! iterating over the array of toys
// const toys = [
//     {
//         id: 1,
//         name: "ball",
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         name: "train",
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         name: "puzzle",
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     }
// ];

// for (const toy of toys) {
//     console.log(`price of the ${toy.name} is $${toy.price}`)
// };

//! adding new objects to the array
// const toys = [
//     {
//         id: 1,
//         name: "ball",
//         color: "green",
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         name: "train",
//         color: "red",
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         name: "puzzle",
//         color: "blue",
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     }
// ];

// const kite = {
//     id: 4,
//     name: "kite",
//     color: "yellow",
//     price: 14,
//     weight: 2.2,
//     shape: "diamond"
// };

// const legos = {
//     id: 5,
//     name: "death star lego set",
//     color: "grey",
//     price: 35,
//     weight: 12,
//     shape: "sphere"
// };

// toys.push(kite);
// toys.push(legos);

// for (const toy of toys) {
//     console.log(`Price of the ${toy.color} ${toy.name} is $${toy.price}`)
// };

//! using the for/of loop to edit the price of every item in the array
// const toys = [
//     {
//         id: 1,
//         name: "ball",
//         color: "green",
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         name: "train",
//         color: "red",
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         name: "puzzle",
//         color: "blue",
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     },
//     {
//         id: 4,
//         name: "kite",
//         color: "yellow",
//         price: 14,
//         weight: 2.2,
//         shape: "diamond"
//     },
//     {
//         id: 5,
//         name: "death star lego set",
//         color: "grey",
//         price: 35,
//         weight: 12,
//         shape: "sphere"
//     }
// ];

// for (const toy of toys) {
//     toy.price = ((toy.price) + (toy.price * 0.05))
//     console.log(`Price of the ${toy.color} ${toy.name} is $${toy.price}`)
// };

//! specifying an id of a toy, then finding the toy with a conditional in a loop

// const toyToFind = 5;
// const toys = [
//     {
//         id: 1,
//         name: "ball",
//         color: "green",
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         name: "train",
//         color: "red",
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         name: "puzzle",
//         color: "blue",
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     },
//     {
//         id: 4,
//         name: "kite",
//         color: "yellow",
//         price: 14,
//         weight: 2.2,
//         shape: "diamond"
//     },
//     {
//         id: 5,
//         name: "death star lego set",
//         color: "grey",
//         price: 35,
//         weight: 12,
//         shape: "sphere"
//     }
// ];

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = ((toy.price) + (toy.price * 0.05))
//         console.log(`Price of the ${toy.color} ${toy.name} is $${toy.price}`)
//     };
// };

//! using a function to add an id to a new toy object when it is added to the array

// const toys = [
//     {
//         id: 1,
//         name: "ball",
//         color: "green",
//         price: 5,
//         weight: 1.5,
//         shape: "round"
//     },
//     {
//         id: 2,
//         name: "train",
//         color: "red",
//         price: 10,
//         weight: 3.2,
//         shape: "rectangle"
//     },
//     {
//         id: 3,
//         name: "puzzle",
//         color: "blue",
//         price: 7,
//         weight: 2.5,
//         shape: "square"
//     },
//     {
//         id: 4,
//         name: "kite",
//         color: "yellow",
//         price: 14,
//         weight: 2.2,
//         shape: "diamond"
//     },
//     {
//         id: 5,
//         name: "death star lego set",
//         color: "grey",
//         price: 35,
//         weight: 12,
//         shape: "sphere"
//     }
// ];

// const addToyToInventory = (toy) => {
//     const lastIndex = toys.length - 1;
//     const currentLastToy = toys[lastIndex];
//     const maxId = currentLastToy.id;
//     const idForNewToy = maxId + 1;
//     toy.id = idForNewToy;
//     toys.push(toy);
// };

// const newToy = {
//     name: "stuffed bear",
//     color: "brown",
//     price: 20,
//     weight: 4,
//     shape: "bear-shaped"
// };

// addToyToInventory(newToy);

// for (const toy of toys) {
//     console.log(`Price of the ${toy.color} ${toy.name} is $${toy.price}`)
// };

// console.log(toys);

//! Using a function with splice method to remove discontinued toys

const toys = [
    {
        id: 1,
        name: "ball",
        color: "green",
        price: 5,
        weight: 1.5,
        shape: "round"
    },
    {
        id: 2,
        name: "train",
        color: "red",
        price: 10,
        weight: 3.2,
        shape: "rectangle"
    },
    {
        id: 3,
        name: "puzzle",
        color: "blue",
        price: 7,
        weight: 2.5,
        shape: "square"
    },
    {
        id: 4,
        name: "kite",
        color: "yellow",
        price: 14,
        weight: 2.2,
        shape: "diamond"
    },
    {
        id: 5,
        name: "death star lego set",
        color: "grey",
        price: 35,
        weight: 12,
        shape: "sphere"
    }
];

const removeProduct = (toyId) => {
    const index = toys.findIndex(toy => { return toy.id === toyId });
    toys.splice(index, 1);
};

console.log(toys);
removeProduct(4);
console.log(toys);