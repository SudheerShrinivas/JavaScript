console.log("JavaScript")

// ~ Object Methods
let obj={ 
    Name:"Sudheer",
    id:123,
    Company:"Microsoft"
}

// ! 1. Object.keys()
// console.log(Object.keys(obj))

// ^ o/p => ['Name', 'id', 'Company']

// ! 2. Object.values()
// console.log(Object.values(obj))

// ^ o/p => ['Sudheer', 123, 'Microsoft']

// ! 3. Object.entries()
// console.log(Object.entries(obj))

// ^ o/p => ['Name', 'Sudheer']

// ! 4.Object.seal()
// console.log(Object.seal(obj))
// ? Update =>It is possible in seal() method
// obj.Company="IBM"
// console.log(obj)
// ? insert =>It is not possible in seal() method
// obj.city="Banglore"
// console.log(obj)
// ? delete =>It is not possible in seal() method
// delete obj.id;
// console.log(obj)

// ! 5. Object.isSealed()
// console.log(Object.isSealed(obj))

// ! 6. Object.freeze() 
console.log(Object.freeze(obj))
// ? Update =>It is not possible in freeze()  method
// obj.Company="IBM"
// console.log(obj)
// ? insert =>It is not possible in freeze()  method
// obj.city="Banglore"
// console.log(obj)
// ? delete =>It is not possible in freeze()  method
// delete obj.id;
// console.log(obj)

// ! 7. Object.isFrozen() 
console.log(Object.isFrozen(obj)) 