


// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

const sum = (...rest) => rest.reduce((acc,el) => acc + el, 0)

console.log(sum(1,2,3,4,20));