console.log("Js")


// * Genrator function
// function* demo(i){
//     console.log("I am Genrator function")
//     yield i
//     console.log("Hii i am first")
//     yield i+4
//     console.log("Hiii i am second")
//     yield i+9
//     console.log("Hiiii i am third") 
// }
// let x=demo(30)
// x.next()
// console.log(x.next().value)
// console.log(x.next().value)
// console.log(x.next().value)


// * Crrying Function
let x=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(x(10)(5)(5))

