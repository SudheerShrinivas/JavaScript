console.log("js")
let array=[10,2,30,4,5]
console.log(array)

// ! Array Higher Order Method (HOM)

// ! 8. sort(ascending order)
// let r=array.sort((a,b)=>{
//     return a-b
// })
// console.log(r)

// ! 8. sort(decending order)
// let res=array.sort((a,b)=>{
//     return b-a
// })
// console.log(res)


// ~ ways to make [] empty array
// x=array.slice(1,1)
// console.log(x)
// let array1=[1,2,3,4,5]
// console.log(array1)
// y=array1.splice(-1,-1)
// console.log(y)
// let array2=[1,2,3,4,5]
// console.log(array2)
// z=array2.pop();z=array2.pop();z=array2.pop();z=array2.pop();z=array2.pop();
// console.log(z)
// let array3=[1,2,3,4,5]
// console.log(array3)
// a=array2.shift();a=array2.shift();a=array2.shift();a=array2.shift()
// console.log(a)
// let array4=[1,2,3,4,5]
// console.log(array4)
// array4=[]
// console.log(array4)
// let array5=[1,2,3,4,5]
// console.log(array5)
// b=array5.length=[]
// console.log(b)

// ^ adding the element without push and unshift
// array[array.length]=100
// console.log(array)


// ! 9.map()
// array.map((a)=>{
    // console.log(a)
//     console.log(a+1)
// })


// ! 10.filter()
// console.log(array.filter((a)=>{
// return a>7
// }))


// ! 11.reduce()
// console.log(array.reduce((acc,val)=>{
// return acc+val
// })) 


// ! 12.forEach()
// array.forEach((a,b)=>{
//     console.log(a,b)
// })

// ^ What is the difference between map and forEach() method
// let res=array.map((m)=>{
//     return m
// })
// console.log(res)  // & [1,2,3,4,5]
// let res1=array.forEach((a,b)=>{
//     return a
// })
// console.log(res1)  //& undefined