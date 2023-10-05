console.log("Js")

// ! Array Higher Order Method (HOM)

// ! 3.some()
// let array=[1,2,3,4,5]
// console.log(array)
// let res=array.some((a)=>{
//     return a>2
// })
// console.log(res)
// ^ o/p true

// ! 4.every()
// let res1=array.every((b)=>{
//     return b>2
// })
// console.log(res1)
// ^ o/p false

// ~ array destructuring
// let [a,b,c,d]=[10,20,30,40,50]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// ^ o/p 10
// ^ o/p 20
// ^ o/p 30
// ^ o/p 40


// let [a,b,...c]=array
// console.log(a)
// console.log(b)
// console.log(...c)// spread operator
// ^ o/p 1
// ^ o/p 2
// ^ o/p 3 4 5

// ! 5.values()
// let res=array.values()

// ! 6.keys()
// let res1=array.keys()

// ! 7.entries()
// let res2=array.entries()

// * for loop 
// for(let i of res){
//     console.log(i)
// }
// ^ o/p array values

// for(let i of res1){
//     console.log(i)
// }
// ^ o/p array index position

// for(let i of res2){
//     console.log(i)
// }
// ^ o/p [0,1] index position with value in an array
// ^ o/p [1,2] index position with value in an array
// ^ o/p [2,3] index position with value in an array
// ^ o/p [3,4] index position with value in an array
// ^ o/p [4,5] index position with value in an array


// & adding element in to one internal array
function addTolist(item,list){
    console.log(list)
    console.log(list.push(item))
    console.log(list)
}
addTolist("Apple",["Mango"])