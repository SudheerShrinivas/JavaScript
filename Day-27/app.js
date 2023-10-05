console.log("JavaScript")

// ! ProtoType inheritance
// let obj={
//     id:"Sudheer"
// }
// let obj1={
//     State:"Karnataka",
//     city:"Banglore"
// }

// ^_____________________________________________________________________________________________________________
// obj.__proto__=obj1
// console.log(obj)
// console.log(obj1)
// console.log(obj.__proto__.city)

// obj.__proto__=obj1
// console.log(obj)
// console.log(obj1)
// obj.__proto__.id=1232
// console.log(obj.__proto__.id)

// obj.__proto__={
//     State:"Karnataka",
//     city:"Banglore"
// }
// console.log(obj)


// ^____________________prototype____________________________________________________________________________________________
// ? ProtoType 
// function demo(id){
//     this.id=id
// }
// let obj=new demo("Sudheer")
// let obj1=new demo("JS")
// obj.prototype=obj1
// console.log(obj)

// ! Map Object()
// let setObj=new Map([["id","Sudheer"],["id",123]])
// let setObj= new Map()
// console.log(setObj)
// ? Set method()
// ^ we can pass key in string
// setObj.set("id","Sudheer")
// console.log(setObj)
// ^ we can pass key in number
// setObj.set(123,"id")
// console.log(setObj)
// ^ null
// setObj.set(null,"id")
// console.log(setObj)
// ^ undefined
// setObj.set(undefined,"id")
// console.log(setObj)
// ^ {}
// setObj.set({},"id")
// console.log(setObj)

// ~ Multiple Values for a keay
// let setObj= new Map()
// console.log(setObj)
// setObj.set("id",["Sudheer","123"])
// console.log(setObj)

// ? get method()
// console.log(setObj.get("id"))

// ? has method()
// console.log((setObj.has("id")))

// ? delete
// console.log(setObj.delete("id"))
// setObj.delete("id")
// console.log(setObj)

// ? clear
// setObj.clear()
// console.log(setObj)

// ? keys
// for(let i of setObj.keys()){
// console.log(i)
// }

// ? values
// for(let i of setObj.values()){
//     console.log(i)
//     }

// ? entries()
// for(let i of setObj.entries()){
//     console.log(i)
//     }


// ! Set Object
// let setObj= new Set([["id","Sudheer"],["id",111]])
// let setObj= new Set(["id","Sudheer","id",111])
let setObj= new Set()
console.log(setObj)

// ? add()
setObj.add("Sudheer").add("id").add("java").add("sql")
console.log(setObj)

// ? has method()
console.log((setObj.has("id")))

// ? delete
console.log(setObj.delete("id"))
setObj.delete("id")
console.log(setObj)

// ? clear
setObj.clear()
console.log(setObj)

// ? keys
for(let i of setObj.keys()){
console.log(i)
}

// ? values
for(let i of setObj.values()){
    console.log(i)
    }

// ? entries()
for(let i of setObj.entries()){
    console.log(i)
    }