// // This is my Lab 5 work.

// // Part 1

 var temp = 32;
 var celsius = (temp - 32) * 5/9;

 console.log(celsius);


// // Part 2

 var temp = 32;
 var unit = "F";

 if (unit === "F") {
 	console.log ("The temperature in celsius is " + (temp - 32) * 5/9);
 }
 else {
 	console.log ("The temperature in fahrenheit is " + (temp * 1.8) + 32);
 }


 var temp = 0;
 var unit = "C";

 if (unit === "F") {
 	console.log ("The temperature in celsius is " + (temp - 32) * 5/9);
 }
 else {
 	console.log ("The temperature in fahrenheit is " + (temp * 1.8) + 32);
 }

 // Changes with James's Feedback

 var temp = 100;
 var unit = "C";
 var F = (temp * 1.8) + 32;
 var C = (temp - 32) * 5/9;

 if (unit === "F") {
 	console.log ("The temperature in celsius is " + C);
 }
 else {
 	console.log ("The temperature in fahrenheit is " + F);
 }
