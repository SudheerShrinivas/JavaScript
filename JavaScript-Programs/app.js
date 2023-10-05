console.log("JavaScript")

// ~ Programs

// & print Hello World
// let str="Hello World"
// console.log(str)

// & Add 2 numbers
// let num1=parseInt(prompt("Enter the value for num1:"))
// let num2=parseInt(prompt("Enter the value for num2:"))
// let sum=num1+num2
// console.log(`Addtion of ${num1} and ${num2} is : ${sum}`)

// & Square=root of a number
// let num=parseInt(prompt("Enter the value for num:"))
// let result=Math.sqrt(num)
// console.log(`Square-root of ${num} is : ${result}`)

// & Area of triangle
// let base=parseInt(prompt("Enter the value for base:"))
// let height=parseInt(prompt("Enter the value for height:"))
// let area=1/2*base*height
// console.log(`Area of Triangle with base(${base}) and height(${height}) is : ${area}`)

// & Swap two variables
// let a=10
// let b=20
// let c=a
// a=b
// b=c
// console.log(a)
// console.log(b)

// & quadratic equation
// function solve(a,b,c){
//     let z=b*b-4*a*c
//     if (z>0){
//         let x1=(-b+Math.sqrt(z))/(2*a)
//         let x2=(-b-Math.sqrt(z))/(2*a)
//         return [x1,x2]
//     }
//     else if (z===0){
//         let x=-b/(2*a)
//         return [x]
//     }
//     else{
//         return "NO Roots are Avilable"
//     }
// }
// let a=1
// let b=-3
// let c=2
// let result=solve(a,b,c)
// console.log(`The Roots of Given Quadratic equation is: ${result}`)

// & Conversion from kilometre to metre
// function convert(a){
//     let mile=a*0.621371
//     return mile
// }
// let kilometre=10
// console.log(`Kilometer(${kilometre}) is converted in to : ${convert(kilometre)} miles`)

// & Conversion of celsius to fahrenheit
//  function x(a){
//         let f=(a*9/5)+32
//         return f
//     }
//     let celcius=25
//     let res=x(celcius)
//     console.log(`Conversion of Temprature from celcius(${celcius}) to : ${res} fahrenheit`)

// & Genrate a Random Number
// let x= Math.random()*(10-1)+1
// console.log(x)

// & Check number is +ve OR -ve OR 0
// let x=parseInt(prompt("Enter the value for x"))
// if (x>0){
//     console.log(`The Number X(${x}) is Positive`)
// }
// else if (x<0){
//     console.log(`The Number X(${x}) is Negative`)
// }
// else{
//     console.log(`The Number X(${x}) is Zero(0)`)
// }

// & Check number is Even OR Odd
// let x=parseInt(prompt("Enter the value for x"))
// if (x%2==0){
//     console.log(`The Number X(${x}) is Even`)
// }
// else {
//     console.log(`The Number X(${x}) is Odd`) 
// }

// & largest among three Numbers
// let x=parseInt(prompt("Enter the value for x"))
// let y=parseInt(prompt("Enter the value for y"))
// let z=parseInt(prompt("Enter the value for z"))
// if (x>y && x>z){
//     console.log(`X: ${x} is Larger than Y: ${y} and Z: ${z}`)
// }
// else if(y>z){
//     console.log(`Y: ${y} is Larger than X: ${x} and Z: ${z}`)
// }
// else{
//     console.log(`Z: ${z} is Larger than Y: ${y} and X: ${x}`)
// }

// & printing largest number using math operation
// let num1=parseInt(prompt("Enter the value for num1:"))
// let num2=parseInt(prompt("Enter the value for num2:"))
// let num3=parseInt(prompt("Enter the value for num3:"))
// let max=Math.max(num1,num2,num3)
// console.log(max)


// & Check number is Prime OR Not
// let num=parseInt(prompt("Enter the Value for Num"))
// let x=true
// if(num===1){
//     console.log('The Number is Neither Prime Nor Composite')
// }
// else if(num>1){
//     for(let i=2 ; i<num; i++){
//         if(num%i==0){
//             x=false
//         }
//     }
// }
// if(x){
//     console.log(`The given Number Num=${num} is a Prime Number`)
// }
// else{
//     console.log(`The given Number Num=${num} is Not a Prime Number`)
// }

// & Create the Calculator
// let operation=prompt("Enter the Operator(like + - * or /)")
// let num1=parseInt(prompt("Enter the value for num1:"))
// let num2=parseInt(prompt("Enter the value for num2:"))
// let res
// if(operation == "+"){
//     res=num1+num2;
// }
// else if(operation == "-"){
//     res=num1-num2
// }
// else if(operation == "*"){
//     res=num1*num2
// }
// else{
//     res=num1/num2
// }
// console.log(`${num1} ${operation} ${num2}= ${res}`)


// & Fibonacci series
// let a=0
// let b=1
// let u=10
// let res
// for(let i=0;i<=u;i++){
//     res=a+b
//     a=b
//     b=res
//     console.log(res)
// }


// & Addtion of two numbers in webpage
// let a=10
// let b=20
// document.write(`The value of a is: ${a}`)
// document.write("<br>")
// document.write(`The value of b is: ${b}`)
// document.write("<br>")
// document.write(`The addition of a(${a}) and b(${b}) is : ${a+b}`)


// & DO while
// let i=0
// let sum=0
// do{
//     sum=sum+i
//     i++
// }while(i<=10)
// console.log(sum)

// & while
// let i=0
// let sum=0
// while(i<=9){
//     sum=sum+i
//     i++
// }
// console.log(sum)

// & for
// let sum=0
// for(let i=0;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)