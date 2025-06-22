// VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
let age = 24;
alert("My age is: " + age);


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

let visitCount = localStorage.getItem("visit-count");
if (visitCount === null) {
  visitCount = 1; 
} else {
  visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem("visit-count", visitCount);
alert(`You have visited this site ${visitCount} time${visitCount > 1 ? 's' : ''}.`);



// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

let birthYear = 1999;
document.writeln("My birth year is: " + birthYear + "<br>");
document.writeln("Data type of my declared variable is: " + typeof birthYear + "<br> <br> <br>");




// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
let visitorName = "John Doe";
let productTitle = "T-shirt";
let Quantity = 5;
document.writeln(`${visitorName} ordered ${Quantity} ${productTitle}(s) on XYZ Clothing Store.`)