console.log("Javascript")

// ^ Callback Hell
// function add(val,callback){
//     return callback(val+5,true)
// }
// function sub(val,callback){
//     return callback(val-5,true)
// }
// function mul(val,callback){
//     return callback(val*5,true)
// }
// function div(val,callback){
//     return callback(val/5,true)
// }
// add(10,(addres,error)=>{
//     console.log(addres)
//     if(error){
//         sub(addres,(subres,error)=>{
//             console.log(subres)
//             if(error){
//                 mul(subres,(mulres,error)=>{
//                     console.log(mulres)
//                     if(error){
//                         div(mulres,(divres,error)=>{
//                             console.log(divres)
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// ^ Promise
// let p=new Promise((resolve,reject)=>{
//     // resolve("Hii i am resolve")
//     // reject("Hii i am reject")
// })
// console.log(p)
// p.then((msg)=>{
//     console.log(msg)
// })
// p.catch((error)=>{
//     console.log(error)
// })
// p.finally(()=>{
//     console.log("I am Finally i always work without intrupting")
// })
// ~ In this we have 3 states 
// ~ 1. Fullfilled
// let p=new Promise((resolve,reject)=>{
//     resolve("Hii i am resolve")
//     reject("Hii i am reject")
// })
// console.log(p)
// ~ 2. Pending
// let p=new Promise((resolve,reject)=>{
  
// })
// console.log(p)
// ~ 3. Reject
// let p=new Promise((resolve,reject)=>{
//     // resolve("Hii i am resolve")
//     reject("Hii i am reject")
// })
// console.log(p)

// *
// let p= new Promise((resolve,reject)=>{
//     let age=confirm("Are you Elegible to Vote")
//     if(age){
//         resolve("OK Good to Go")
//     }
//     else{
//         reject("Plese Enter the Details")
//     }
// })
// console.log(p)

// *
// let p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("The State is fullfilled")
//         reject("The State is Rejected")
//     },2000)
// })
// console.log(p)

// * Promise methods
// let p1=new Promise((resolve,reject)=>{
//     resolve("Hi I am Resolve 1")
//     reject("Hi i am Reject 2")
// })
// let p2=new Promise((resolve,reject)=>{
//     resolve("Hi I am Resolve 2")
//     reject("Hi i am Reject 2")
// })
// let p3=new Promise((resolve,reject)=>{
//     resolve("Hi I am Resolve 3")
//     reject("Hi i am Reject 3")
// })
// let p4=new Promise((resolve,reject)=>{
//     resolve("Hi I am Resolve 4")
//     reject("Hi i am Reject 4")
// })
// & Promise.all -----> All the Promises Must be fullfill in this method Otherwise it will return reject stament 
// Promise.all([p1,p2,p3,p4]).then((msg)=>{
//     console.log(msg)
// })

// & Promise.any -----> any of the Promises is fullfill it will give outpuy if all the promises is rejected it will give //AggregateError
// Promise.any([p1,p2,p3,p4]).then((msg)=>{
//     console.log(msg)
// })

// & Promise.allSettled  ----->({status: 'fulfilled', value: 'Hi I am Resolve 2'})
// Promise.allSettled([p1,p2,p3,p4]).then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// })

// & Promise.race -----> Based on the it will be executed
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hi I am Resolve 1")
//         reject("Hi i am Reject 1")
//     },3000)
// })
// let p2=new Promise((resolve,reject)=>{.
//     setTimeout(()=>{
//         resolve("Hi I am Resolve 2")
//         reject("Hi i am Reject 2")
//     },2000)
// })
// Promise.race([p1,p2]).then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// })


// & promise chaining
// let p=new Promise((res,rej)=>{
//     res(10)
//     rej(20)
// })
// p.then((msg)=>{
//     console.log(msg)
//     return msg+1
// }).then((msg)=>{
//     console.log(msg)
//     return msg+1
// }).then((msg)=>{
//     console.log(msg)
//     return msg+1
// }).then((msg)=>{
//     console.log(msg)
// })