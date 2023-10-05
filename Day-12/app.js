console.log("js")
// ~ 5.HOF
// function HOF(){
//     console.log("I am HOF")
// }
// HOF(Callback())

// ~ 6.Callback
// function Callback(){
//     console.log("I am Callback")
// }

// ! Ex-1
// function operation(a,b,task)
// {
//     return task(a,b)
// }
// operation(10,20,function(x,y)
// {
//     console.log(x+y)
// })

// ! Ex-2
// a=parseInt(prompt("Enter value for a"))
// b=parseInt(prompt("Enter value for b"))
// function operation( a,b,c)
// {
//     return c(a,b)
// }
// operation(a,b,function(a,b){
//     console.log(`The addition of ${a} and ${b} is ${a+b}`)
//     console.log(`The subtraction of ${a} and ${b} is ${a-b}`)
//     console.log(`The multiplication of ${a} and ${b} is ${a*b}`)
//     console.log(`The division of ${a} and ${b} is ${a/b}`)
// })

// ! Ex-3
// a=parseInt(prompt("Enter value for a"))
// b=parseInt(prompt("Enter value for b"))
// c=parseInt(prompt("Enter value for c"))
// function operation( a,b,c,d)
// {
//     return d(a,b,c)
// }
// console.log(`Addition of ${a} and ${b} is ${operation(a,b,c,function(){
//     return a+b
// })}`)
// console.log(`Subtraction of ${a} and ${c} is ${operation(a,b,c,function(){
//     return a+c
// })}`)
// console.log(`multiplication of ${a} and ${b} is ${operation(a,b,c,function(){
//     return a*b
// })}`)
// console.log(`division of ${a} and ${c} is ${operation(a,b,c,function(){
//     return a/c
// })}`)


// ^ Task
let b= parseInt(prompt("Enter the value for base "))
console.log(`base :${b}`)
let h= parseInt(prompt("Enter the  value for height "))
console.log(`height :${h}`)
let l= parseInt(prompt("Enter the  value for length "))
console.log(`length :${l}`)
let w= parseInt(prompt("Enter the  value for width "))
console.log(`width :${w}`)
let r= parseInt(prompt("Enter the  value for radius "))
console.log(`radius :${r}`)
const pi=3.14
console.log(`pi :${pi}`)
let a= parseInt(prompt("Enter the  value for parllelside or half mirror axis "))
console.log(`parllel side :${a}`)
console.log(`half mirror axis :${a}`)
let d= parseInt(prompt("Enter the  value for parllelside or half mirror axis "))
console.log(`parllel side :${d}`)
console.log(`half mirror axis :${d}`)
let angle= parseInt(prompt("Enter the  value for angle "))
console.log(`Angle is :${angle}`)


// & function starts
function Area(b,h,l,w,r,pi,a,d,angle,x)
{
return x(b,h,l,w,r,pi,a,d,angle)
}
console.log(`Area of Triangle with the base(${b}) and height(${h}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (1/2*b*h)
 })} `)
 console.log(`Area of Rectangle with the width(${w}) and height(${h}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (w*h)
 })} `)
 console.log(`Area of Trapezoid with the parllel sides(${a},${d}) and height(${h}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (1/2*(a*d)*h)
 })} `)
 console.log(`Area of Ellipse with the Half mirror Axis(${a} and ${d}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (pi*a*d)
 })} `)
 console.log(`Area of Square with the length(${l}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (l*l)
 })} `)
 console.log(`Area of Parallelogram with the base(${b}) and height(${h}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (b*h)
 })} `)
 console.log(`Area of Circle with the radius(${r}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (pi*r*r)
 })} `)
 console.log(`Area of Sector with the radius(${r}) and Angle(${angle}) is : ${Area(b,h,l,w,r,pi,a,d,angle, function(){
    return (1/2*r*r*angle)
 })} `)