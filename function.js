// let a = 10, b = 10;
// function Sum(var1, var2) {
//     console.log(var1 + var2)

// }
// Sum(2, 3)

//Scope
//1.Local scope

// let a = 0, b = 0;

// function Sum(num1, num2) {
//     let c;
//     c =32;
//     return c;
// }
// console.log(Sum(2,2));

//2.Global scope

// let h1 = 0, h2 = 0;
// let c;

// function Cal(h1, h2) {
//     c = h1 + h2;
//     return c;

// }
// console.log(Cal(2, 2));

//Add Even exercise
let num = 4;
let op = 'add'

function Addeven(Addeven) {
    if (Addeven % 2 == 0) {
        op = 'even'

    } else {
        op = 'add'

    }
    return op ;
    

}
console.log(Addeven(num));

