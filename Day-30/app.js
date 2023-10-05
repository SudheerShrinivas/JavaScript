console.log("js")

// ! call()
// var obj={
//     Name:"Sudheer",
//     id:123
// }
// function demo(a,b,c){
//     console.log("Hiiiiiii")
//     console.log(this)
//     console.log(a,b,c)
//     return this.Name+ " " + this.id
// }
// console.log(demo())
// console.log(demo.call(obj,10,20,30))

// ! apply()
// var obj={
//     Name:"Sudheer",
//     id:123
// }
// function demo(a,b,c){
//     console.log("Hiiiiiii")
//     console.log(this)
//     console.log(a,b,c)
//     return this.Name+ " " + this.id
// }
// console.log(demo.apply(obj,10,20,30))
// ~ error---> CreateListFromArrayLike called on non-object
// console.log(demo.apply(obj,[10,20,30]))

// ! bind()
let p1={
    Name:"Sudheer",
    id:122,
    func: function demo(a,b,c){
            console.log("Hiiiiiii")
            console.log(this)
            return this.Name+ " " + this.id
    }
}
let p2={
    Name:"Xyz",
    id:123
}
let res=p1.func.bind(p2)
console.log(res())