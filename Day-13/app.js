console.log("js")

// ! Arrow function
// let x=()=>{
//     console.log("Arrow Function")
// }
// x()


// & Recursion function
// function demo(){
//     console.log("Recursion function")
//     demo()
// }
// demo()


// * Immediately invoking function expression
(function () {
    var a=0
    a++
    console.log("IIFE")
}())
function IIFE() {
    console.log("Immediately invoking function expression")
}
IIFE()
