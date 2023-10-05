console.log("Js")
//  ! How to create an oject

// ? 1. Object literals
// let obj={
//     Name:"Sudheer",
//     id : 512 , 
//     addres:{
//         city:"Banglore",
//         state:"Karnataka"
//     }
// }
// console.log(obj)

// & fetch the data from the particular object
// ^1. Using dot(.) Operator
// console.log(obj.Name)
// console.log(obj.id)
// console.log(obj.addres.city)

// ^2. Using array literals
// console.log(obj["addres"])

// ~ 
// let obj={
//     Name:"Sudheer",
//     id : 512 ,
//     salary:"12 LPA",
//     company:"Microsoft",
//     skills:["HTML","CSS","JavaScript","Java","SQL","Python","MongoDB","ReactJS","NodeJS"]
// }
// console.log(obj)
// let skills=obj.skills;
// console.log(skills)
// skills.map((m)=>{
//     console.log(m)
// })
// *
// let obj={
//     Name:"Sudheer",
//     marks:()=>{
//         return [69,70,80,65,99]
//     }
// }
// let a=obj.marks()
// let per= a.reduce((acc,val)=>{
//     return acc+val
//     }) 
//     console.log(per/5)

// console.log(obj.marks().reduce((acc,val)=>{
//     return acc+val
// })/5)

// ^ 
// let obj={
//     a:"One",
//     b:"Two",
//     a:"Three"
// }
// console.log(obj)

// & 
let obj={
    Name:"Sudheer",
    id:512,
    salary:"12 LPA",
    Location:"National college"
}
console.log(obj)

// ^ Update
obj.Location="Banglore"
console.log(obj)

// ^ insert
obj.State="Karnataka"
console.log(obj)

// ^ delete
delete obj.id;
console.log(obj)