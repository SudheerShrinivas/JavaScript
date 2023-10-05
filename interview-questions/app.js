//  * Question - 1
// ! You are building a real-time dashboard for monitoring a weather station'sdata. The weather station updates its data every 5 seconds. You need to fetch this data and update the dashboard accordingly. Implement the following functions:
// ! a. fetchWeatherData function: This function should return a Promise that
resolves with the latest weather data from the station. You can assume that
there's an API endpoint getWeatherData that returns the data.
b. updateDashboard function: This function should be called every time new
weather data is fetched. It takes the weather data as a parameter and
updates the dashboard with the latest information.
c.startMonitoring function: This function should use setInterval to fetch weather
data every 5 seconds and update the dashboard.
Requirements:
● Use async/await to handle asynchronous operations.
● Ensure that the dashboard is updated with the latest data.
● Implement error handling for fetching data.
● Stop monitoring when an error occurs and log an error message.
Your code should demonstrate the correct usage of async/await, Promise,
setTimeout, and setInterval. Provide a code example that initialises and
starts the monitoring process.

*************************************************************************************

Question - 2
Imagine you have a list of numbers written on a piece of paper, and you also
have two numbers written on separate sticky notes. Your goal is to perform
two tasks with this list of numbers:
Task 1 - Creating a New List: To start, you want to make a copy of a part of
the original list. Imagine taking a pair of scissors and cutting out a section of
the list. The first sticky note tells you where to start cutting, and the second
sticky note tells you where to stop cutting. So, you cut out that section and
put
it on a new piece of paper, creating a new list with only the numbers from
where you started cutting up to just before where you stopped cutting.

Task 2 - Removing Numbers from the Original List: After creating the new
list,
You want to clean up the original list. This time, you use a different set of
scissors and the same two sticky notes. Again, you start cutting from where
the first sticky note tells you and stop when you reach where the second
sticky note tells you. This time, however, instead of putting the cut section on
a new piece of paper, you completely remove those numbers from the
original
list.


Solution:

Task1:
let original_list=[10,20,30,40,50,60,70,80,90,100];
console.log("The ORIGINAL LIST is:",original_list)
let sticky_note1=3;
let sticky_note2=6;
let new_list=original_list.slice(sticky_note1,sticky_note2);
console.log("The NEW LIST from the original list:",new_list);

Task2:
original_list.splice(sticky_note1,sticky_note2-sticky_note1)
console.log("The ORIGINAL LIST after removing the elements:",original_list);

*************************************************************************************

Question - 3
Imagine you have a scenario where you need to perform two tasks
asynchronously, like ordering food and waiting for its delivery.
3.1. To place an order, you pick up your phone and call the restaurant. Instead
of
waiting on the phone for the food to be ready, you provide your phone
number
and say, "Call me back when the food is ready." This way, you can continue
doing other things while waiting for the restaurant to call you back when
your
Food is prepared.

Solution:

function Order_by_phone() {
return new Promise((resolve, reject) => {
console.log("Order placed by phone");
alert("Call me back when the food is ready.")
setTimeout(()=>{
console.log("Calling back to the customer...")
},2000)
setTimeout(() => {
let order=prompt("The food is ready(y/n)?")
if(order==="y"){
resolve("Your food is ready 🍔");
}else if(order==="n"){
reject("The food will be delayed...")
}else{
console.error("Invalid data")
}
}, 8000);
});
}

Order_by_phone()
.then((msg) => {
console.log(msg);
})
.catch((err) => {
console.error(err);
});

3.2. In another scenario, you decide to place an order online. After placing your
order, the restaurant gives you a promise, like a written contract, that they
will
deliver the food to your doorstep. This promise includes a guarantee that you
will get your food when it's ready, and you don't need to wait on the phone
or
check constantly. You can carry on with your other activities, and when the
food arrives at your doorstep, you'll receive it.

Solution:

function Order_placed_online() {
return new Promise((resolve, reject) => {
console.log("Ordered placed Online");
alert("Food will be delivered to your doorstep");
setTimeout(() => {
resolve("Your food is delivered to your doorstep. Pick Up!");
}, 5000);
});
}

Order_placed_online()
.then((msg) => {
console.log(msg);
})
.catch((err) => {
console.error(err);
})

*************************************************************************************

Question - 4: Write JavaScript questions that involve working with array methods like

4.1 Write a function sortArray that takes an array of numbers as input and
returns a new array with the numbers sorted in ascending order. Do
not modify the original array.

Solution:

function sortArray(){
let arr=[12,9,78,5,101,96,45];
return arr.sort((a,b)=>{
return a-b;
})
}
console.log(sortArray())

4.2 Write a function findElement that takes an array of strings and a search
term as input and returns the index of the first occurrence of the
search term in the array. If the search term is not found, return -1

Solution:

function findElement(){
let element=prompt("Enter the element to search:")
let arr=["mongodb","expressjs","js","reactjs","nodejs","js"]
return arr.indexOf(element);
}
console.log(findElement())

4.3 Write a function filterEvenNumbers that takes an array of numbers as
input and returns a new array containing only the even numbers from
the input array

Solution:

function findEvenNumber(){
let arr=[1,2,3,4,5,6,7,8,9,10];
return arr.filter((e)=>{
return e%2==0;
})
}
console.log(findEvenNumber())

4.4 Write a function squareNumbers that takes an array of numbers as input
and returns a new array where each number is squared.

Solution:

function squareNumbers(){
let arr=[3,4,5,6,7,8];
return arr.map((e)=>{
return e**2;
})
}
console.log(squareNumbers());

4.5 Write a function calculateSum that takes an array of numbers as input
and returns the sum of all the numbers in the array without using a
loop.

Solution:

function calculateSum(){
let arr=[1,2,3,4,5];
return arr.reduce((a,b)=>{
return a+b;
})
}
console.log(calculateSum())