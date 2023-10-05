console.log("Js")

//  ! How to create an oject

// ^ 2. Constructor way
// let obj = new Object({Name:"Sudheer",id:125})
// console.log(obj)

// ^ 3. Object.create()
// let obj=Object.create({Name:"Sudheer",id:125})
// console.log(obj)

// ^ 4. Object.defineProperty()
// let obj=Object.defineProperty({},"Name",{
//     value:"sudheer"
// })
// console.log(obj)

// let obj=Object.defineProperty({},"Emp_Data",{
//     value:{
//         Name:"Sudheer",
//         id:125
//     }
// })
// console.log(obj)

// ^ 5. Object.defineProperties()
// let obj=Object.defineProperties({},{
//     emp_data1:{
//         value:{
//             Name:"Sudheer",
//             id:125
//         }
//     },
//     emp_data2:{
//         value:{
//             Name:"Sudheer",
//             id:125
//         }
//         }
// })
// console.log(obj)

// ^ 6. structuredClone()
// let obj=structuredClone({Name:"Sudheer", id:125})
// console.log(obj)

// ^ 7. Object.assign(Target,source)
// let obj=Object.assign({},{"Name":"Sudheer", "id":125})
// console.log(obj)

// ~ 1. Converting array to object
// let obj=Object.assign({},["Name","Sudheer", "id",125])
// console.log(obj)

// ~ 2.  Converting object to array
// let obj=Object.assign([],{Name:"Sudheer", id:125})
// console.log(obj)

// ^ 8.JSON.parse(JSON.stringify({ }))
// let obj=JSON.parse(JSON.stringify({Name:"Sudheer", id:125}))
// console.log(obj)

// ^ 9.Constructor Function
function obj(Name,id,salary){
    this.Name=Name,
    this.id=id,
    this.salary=salary
}
let obj1=new obj ("Radhey","Krishna","Infinity")
console.log(obj1)