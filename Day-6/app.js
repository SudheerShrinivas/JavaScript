"use strict"
console.log("java script")
// & Scope

// ! 1(a). Global Scope
// var a = 10
// console.log(a)
// ! 1(b). Script Scope
// let b = 20
// console.log(b)

// ? Block Scope
// var a = 100;
// let b = 200;
// const c = 300;
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     var d = 400;
//     let e = 500;
//     const f = 600;
// }
// console.log(d)
// console.log(e)
// console.log(f)


// ^ Function Scope or Local Scope
var a = 100
let b = 200
const c = 300
function demo()
{
console.log(a)
console.log(b)
console.log(c)
var d = 400
let e = 500
const f = 600
}
demo()
console.log(d)


// a = 30
// console.log(a)

//  var a = 30
// console.log(a)