console.log("Js")

// & BOM
// ! Window Property
// console.log(window)
// console.log(window.screen==screen)
// console.log(screen)
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.availWidth)
// console.log(screen.availHeight)

// ~ DOM methods

// ? 1.getElementById()
// let para=document.getElementById("para")
// console.log(para)
// let para1=document.getElementById("para1")
// console.log(para1)

// *  inner text
// para.innerText="Sudheer"
// console.log(para)
// para1.innerText="Java"
// console.log(para1)

// * inner Html
// para.innerHTML="Sudheer"
// console.log(para)
// para1.innerHTML="Java"
// console.log(para1)

// * Difference between innerText and innerHTML
// para.innerText=`<a href="#"> Link </a>`
// console.log(para)
// para.innerHTML=`<a href="#"> Link </a>`
// console.log(para)

// ? 2.getElementsByClassName()
let div=document.getElementsByClassName("div")
console.log(div)
let res=Array.from(div)
// console.log(res)
res.map((i)=>{
    console.log(i)
})
// & how can we check the given array is a array or not
