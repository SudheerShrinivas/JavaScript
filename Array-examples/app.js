console.log("JS")

// & Empty an array
var meals=["Breakfast","Lunch","Dinner"]
// console.log(meals.splice(0 ,meals.length))
// console.log(meals)

// & Clone an array
// var copy=meals.slice();
// console.log(copy)

// & Get last item
// console.log(meals[meals.length-1])
// * or
// console.log(meals.slice(-1)[0])

// & Remove first item
// console.log(meals.shift())
// console.log(meals)

// & Remove last item
// console.log(meals.pop())
// console.log(meals)

// & Add new item(s) to biginning
// meals.unshift("pre-brekfast")
// console.log(meals)

//  & Add new item(s) to end
// meals.push("post-brekfast")
// console.log(meals)

// & Overwrite item at a specific index
// meals[1]="brunch"
// console.log(meals)
// * or
// meals.splice(1,1,"Brunch")
// console.log(meals)

// & Add new item(s) at a specific index
// meals.splice(1,0,"brunch","Snack")
// console.log(meals)

// & Remove single item at a specific index
// meals.splice(1,1)
// console.log(meals)

// & Remove several items
// meals.splice(1,2)
// console.log(meals)

// & Reverse an array
// console.log(meals.reverse())

// & Delimit an array
// var array=["hi","Hello","J"]
// console.log(meals.join(" AND ")) 

// & Sort in alphabetical order
// console.log(meals.sort())

// & Sort in Numerical Order
// var num=[1,2,5,6,7,4,3]
// console.log(num.sort((a,b)=>{
//     return a-b
// }))

// & Join two arrays together
// var dayTimeMeals=["Breakfast","lunch"]
// var nightTimeMeals=["Snack","Dinner"]
// console.log(dayTimeMeals.concat(nightTimeMeals))

// & Copy specific item
// var a=meals.slice(0,2)
// console.log(a)

// & Argument items within an array
// var type=["Dosa","Roti","Rice"]
// console.log(meals.map((a,b)=>{
//     return a+ " like "+type[b];
// }))

// & Return true if every item meets a condition
// console.log(meals.every((a)=>{
//     return a.length>0
// }))

