"use strict"
console.log("Js")

// & Arrow function
// let demo=()=>{
//     console.log("Javascript")
// }
// console.log(demo)


// &1.
// let x=()=>
// {
//     console.log("hiiii")
//     console.log("Second")
//     console.log("third")
// }
// x()


// &2.
// let x=()=>{
// return "hiii"
// }
// console.log(x())


// &3.
// var a=100`
// function demo(){
//     console.log(this.a)
//     console.log(this)
// }
// demo()
// let x=()=>{
//     var a=500
//     console.log(this.a)
//     console.log(this)
// }
// x()


// ! 1.
// function* genrator(i){
//     yield i;
//     yield i+10;
// }
// let x=genrator(10)
// console.log(x.next().value);
// console.log(x.next().value);

// ! 2.
// function demo(){
//     var name="Javascript"
//     console.log(name)
// }
// demo()
// demo.name="React"
// demo()

// ! 3.
// function x(){
//     var name = "Javascript"
//     console.log(name)
// }
// x()
// function y(){
//     console.log(name)
// }
// y()

// ! 4.
// var a=10000
// function demo(){
//     "use strict"
//     var a=100
//     console.log(this.a)
// }
// demo()

// ! 5.
// var a=500;
// let x=()=>{
//     var a=400
//     console.log(this.a)
// }
// x()

// ! 6.
// function* demo(){
//     yield ["one","Two","three","four","five"]
// }
// function* demo1(){
//     yield* ["one","Two","three","four","five"]
// }
// let x=demo()
// let y=demo1()
// console.log(x.next().value)
// console.log(y.next().value)

// ! 7.
// let x=new Array(1)
// console.log(typeof Array())

// ! 8.
// let add=(x)=>(y)=>(z)=>{
//     console.log(x,y,x)
//     return x+y+z
// }
// add(5)(10)(15)

// ! 9.
// let sub =(a)=>(b)=>(c)=>{
//     console.log(a,b,c)
//     return a-b-c
// }
// console.log(sub(10)(5)(2))

// ! 10.
// console.log(typeof typeof Number+1)

// console.log(typeof typeof 1+"2")
// x()
// function x(){
//     console.log("I am arrow")
// }

function demo(a,b,task)
{
    task(10,20)
}
demo(10,20,(x,y)=>{
console.log(x+y)
})