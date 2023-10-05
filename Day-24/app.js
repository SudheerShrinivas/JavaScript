console.log("JavaScript")

// & Ways to copy an object
// let obj={
//     Name:"Sudheer",
//     id:123
// }
// console.log(obj)
// ^ 1. ussing Assign operator
// let obj1=obj
// console.log(obj)

// ^ 2. Object.assign()
// let obj1=Object.assign(obj)
// console.log(obj1)

// ^ 3. Rest Parameter
// let {...obj1}=obj
// console.log(obj1)

// ^ 4. Constructor way
// let obj1=new Object(obj)
// console.log(obj1)

// ^ 5. using for in loop
// let x={}
// for (let keys in obj)
// {
//     x[keys]=obj[keys]
// }
// console.log(x)

// ^ 6. structuredClone()
// let obj1=structuredClone(obj)
// console.log(obj1)

// ^ 7. JSON.parse(JSON.stringify())
// let obj1=JSON.parse(JSON.stringify(obj))
// console.log(obj1)

// ^ 8. Object.defineProperty()
// let obj1=Object.defineProperty({},"emp_detail",{
//     value:obj
// })
// console.log(obj1)

// ^ 9.Object.defineProperties()
// let obj1=Object.defineProperties({},{emp_detail:{
//     value:obj
// }
// })
// console.log(obj1)

// ^ 10. Object.create()
// let obj1=Object.create(obj)
// console.log(obj1)

// & cloning of an object

// !1. by using assign operator => cloning is not possible
// let obj1=obj
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// !2. by using Object.assign() => cloning is not possible
// let obj1= Object.assign(obj)
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// !3. by using Rest parameter => cloning is possible
// let {...obj1}=obj
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// !4. by using Constructor => cloning is not  possible
// let obj1=new Object(obj)
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// !5. by using structuredClone() => cloning is possible
// let obj1=structuredClone(obj)
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// !6. by using JSON.parse(JSON.stringify()) => cloning is possible
// let obj1=JSON.parse(JSON.stringify((obj)))
// console.log(obj1)
// obj1.Name="JavaScript"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

let obj={
    Name:"Sudheer",
    id:123,
    addres:{
        city:"Banglore",
        state:"Karnataka"
    }
}
console.log(obj)

// ~ Shallow copy
// let {...obj1}=obj
// console.log(obj1)
// obj1.addres.city="Mysore"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// ~ deep copy
// ? 1. structuredClone()
// let obj1=structuredClone(obj)
// console.log(obj1)
// obj1.addres.city="Mysore"
// console.log(obj1) 
// console.log(obj)
// console.log(obj==obj1)

// ? 2. JSON.parse(JSON.stringify())
let obj1=JSON.parse(JSON.stringify(obj))
console.log(obj1)
obj1.addres.city="Mysore"
console.log(obj1) 
console.log(obj)
console.log(obj==obj1)