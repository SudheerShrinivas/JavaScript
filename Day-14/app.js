console.log("Js")

// ^ Nested function
var a=100
let b=200
const c=300 
function grand_parent(){
    console.log("Grand Paren Function")
    console.log(a)
    console.log(b)
    console.log(c)
    var d=400
    let e=500
    const f=600 
    function parent(){
        console.log("Paren Function")
        console.log(d)
        console.log(e)
        console.log(f)  
        var g=700
        let h=800
        const i=900 
        function child(){
            console.log("Child Function")
            console.log(g)
            console.log(h)
            console.log(i)    
        }child()
    }parent()
}grand_parent()