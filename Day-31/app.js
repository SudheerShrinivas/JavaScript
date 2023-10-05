console.log("js")

// * fetch(fetching an API)
// let data=fetch("./emp.json")
// console.log(data)
// data.then((msg)=>{
//     console.log(msg)
//     let finalData=msg.json()
//     console.log(finalData)
//     finalData.then((m)=>{
//         console.log(m)
//         m.map((a) => {
//             console.log(a)
//             console.log(a.Name)
//         })
//     })
// })

// *
let data=fetch("https://api.github.com/users")
console.log(data)
data.then((msg)=>{
    console.log(msg)
    let finalData=msg.json()
    console.log(finalData)
    finalData.then((m)=>{
        console.log(m)
        m.map((a) => {
            console.log(a)
            // console.log(a.Name)
        })
    })
})

// * 2 XMLHttpRequest()
// function test(){
//     let a= new XMLHttpRequest()
//     a.open("GET","https://api.github.com/users")
//     a.onload=function(){
//         console.log(a)
//         let b= JSON.parse(a.response)
//         console.log(b)
//         b.map((m)=>{
//             console.log(m)
//         })
//     }
//     a.send()
// }
// test()

// * 3 async and await
// async function demo(){
//     let a=await fetch("https://api.github.com/users")
//     console.log(a)
//     let b= await a.json()
//     console.log(b)
//     b.map((m)=>{
//         console.log(m)
//     })
// }
// demo()