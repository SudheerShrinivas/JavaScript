console.log("JavaScript")

let array=[10,20,30,40,50]

// !1.Minimum in an array
// console.log(array.sort((a,b)=>{
//     return a-b
// }))
// console.log(array[(0)])

// ! 2.Maximum in an array
// console.log(array[array.length-1])

// ! 3.Sum of all the numbers
// console.log(array.reduce((a,b)=>{
//     return a+b
// }))

// ! 4.Average of all the numbers
// console.log(array.reduce((a,b)=>{
//     return a+b
// })/array.length)

// ! 5.Array is Empty or not
// console.log(array.length)
// console.log(array.map((a)=>{
//     console.log(a)
// }))

// ! 6.Merge two arrays
// let array1=[60,70,80]
// console.log(array.concat(array1))

// ! 7.Convertin array of string to lowecase
// let array1=["HI","HELLO","JAVASCRIPT"]
// console.log(array1.map((a)=>{
//    return a.toLowerCase()
// }))

// ! 8.Cont the Occurence of specific element in array
// let a=20
// let count=0
// for(i of array)
// if(i==a){
//     count++
// }
// console.log(count)

// ! 9.Remove specific element in array
// console.log(array.splice(0,1))
// console.log(array )

// ! 10.All the elements satisfy a condition in an array
// console.log(array.every((a)=>{
//     return a>9
// }))

// ! 11. Finding the index of specific element
// console.log(array.findIndex((a)=>{
//     return 10
// }))

// ! 12. Splict string into array of characters
// let str="HELLO"
// console.log(str.split(""))

// ! 13. Convertin Object to an array
// console.log(Object.assign({},array))

// ! 14. Check two arrays are equal are not
// let array1=[10,20,30,40,50]
// function compare(a,b){
// * Length
// if(a.length!==b.length){
//     return false;
// }
// else{
//     let result=false;
// *Elements
// for(let i=0;i<a.length;i++){
//     if(a[i]!==b[i]){
//         return false
//     }
//     else{
//         result=true
//     }
// }
// return result;
// }
// }
// console.log(compare(array,array1))

// ! 15. flatten a nested array
// let array1=[10,20,[[[[[[[[[[30]]]]]]]]]],40,50]
// console.log(array1.flat(Infinity))

// ! 16. Find the Intersection of two arrays
// let array1=[10,20,50,5,4]
// let x=(a,b)=>{
//     return a.filter((z) => {
//         return b.includes(z)
//     })
// }
// console.log(x(array,array1))

// ! 17. Check if array contains only Numbers
// let f=(a)=>{
//     return a.every((x) => {
//         return typeof x==="number"
        
//     })
// }
// console.log(f(array))

// ! 18. Check if array contains only String
// let f=(a)=>{
//     return a.every((x) => {
//         return typeof x==="string"
        
//     })
// }
// console.log(f(array))

// ! 19. Array contains Specific SubArray
// let array1=[10,20,[30,60,90],40,50]
// let sub=[30,60,90]
// console.log(array1.some((m)=>{
//     return m.toString()===sub.toString()
// }))

// ! 20. Truncate an array to specified length
// array.length=4
// console.log(array)

// ! 21. Difference between two arrays
// let array1=[10,20,20,90,100]
// let def=array.filter((x)=>{
//     return !array1.includes(x)
// })
// console.log(def)

// ! 22. Remove falsy values from array
// let array1=[10,20,30,40,50,undefined,null,0,false," "]
// let x=(a)=>{
//     a=a.filter((n)=> {
//         return (n!=0 && n!= null && n!= undefined && n!=false && n!=" ")
//     })
//     return a
// }
// console.log(x(array1))