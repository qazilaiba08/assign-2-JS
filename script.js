//chap 3

//Q#1

var age = 22;//declear
alert("I Am "+" "+age +" "+"years old");

// Q#2

var initialvisit = 0;//declear
var visits = 20;
alert("You have visited this site"+" "+visits+" "+"times");

//Q#3

var birthyear = 2002;//declear

document.write("My birth year is "+" "+birthyear+"<br>"+"Data type of my ddeclear vairable is number"+"<br>");

//Q#4

// var store = "www.xyzClothing.com ";
// var visitor = "Jhon Doe";
// var pro_title = "T-Shirt(s)";
// var quanitaity = 5;

// document.write(visitor+ " "+" Order"+quanitaity+" "+pro_title+" "+"on"+" "+store);

//CHAP 4

//Q#1 

// var sub;
// var tab;
// var tia;//declear variables

//Q#2

//5 legaeal
var name;
var time;
var short ;
var $;
var reg;

//5 illegeal 
// var 5pa;
// var %gjj;
// var g@matchMedia;
// var !ball;
// var #5hjk;

//Q#3 in  index .html

//CHAP #5
//Q#1
  
var num = 3;
var newnum = 5;
var result =(num + newnum);
document.write("Sum of"+" "+num +' '+'and'+' '+ newnum+' '+"is"+' '+result+"<br>");
//Q#2


var num = 3;
var newnum = 5;
var result =(num - newnum);
document.write("Sum of"+" "+num +' '+'and'+' '+ newnum+' '+"is"+' '+result+"<br>");

var num = 3;
var newnum = 5;
var result =(num * newnum);
document.write("Sum of"+" "+num +' '+'and'+' '+ newnum+' '+"is"+' '+result+"<br>");

var num = 3;
var newnum = 5;
var result =(num / newnum);
document.write("Sum of"+" "+num +' '+'and'+' '+ newnum+' '+"is"+' '+result+"<br>");

//Q#3

// a. Declare a variable
var myVariable;

// b. 
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. 
myVariable = 5;

// d. 
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable
myVariable++;

//f
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable
myVariable += 7;


document.write("Value after adding 7 is: " + myVariable + "<br>");

// h. 
document.write("Value after addition is: " + (myVariable + 7) + "<br>");

// i. Decrement the variable
myVariable--;

// j. 
document.write("Value after decrement is: " + myVariable + "<br>");

// k. 
var remainder = myVariable % 3;

// l. 
document.write("The remainder is: " + remainder + "<br>");

//Q#4

var costofticket = 600;
var buyingticket = 5;
var result = (costofticket * buyingticket);

document.write("Total cost to buy " +" "+buyingticket+' '+"tickets to a movies is "+' '+result+"PKR");

//Q#5

var table = 4;
document.write("Table of"+ " "+4+"<br>");

document.write(table+" "+"X"+" "+1+' '+"="+" "+table+ "<br>");

var two =2;
document.write(table+" "+"X"+" "+2+' '+"="+" "+8+ "<br>");

document.write(table+" "+"X"+" "+3+' '+"="+" "+12+ "<br>");

document.write(table+" "+"X"+" "+4+' '+"="+" "+16+ "<br>");

document.write(table+" "+"X"+" "+5+' '+"="+" "+20+ "<br>");

document.write(table+" "+"X"+" "+6+' '+"="+" "+24+ "<br>");

document.write(table+" "+"X"+" "+7+' '+"="+" "+28+ "<br>");

document.write(table+" "+"X"+" "+8+' '+"="+" "+32+ "<br>");

document.write(table+" "+"X"+" "+9+' '+"="+" "+36+ "<br>");

document.write(table+" "+"X"+" "+10+' '+"="+" "+40+ "<br>");

//Q#6

var celsiusTemperature = 77; 
var result = (77-32)*5/9;

console.log(result);
document.write("25C is 77F"+"<br>");
document.write("70F is 21.11111111")

//Q#7

// Variables for item prices and quantities
var priceItem1 = 650; // Price of item 1
var priceItem2 = 100; // Price of item 2
var quantityItem1 = 3; // Ordered quantity of item 1
var quantityItem2 = 7; // Ordered quantity of item 2

// Calculate the total cost of each item
var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

// Calculate the subtotal
var subtotal = totalItem1 + totalItem2;

// Variable for shipping charges
var shippingCharges = 100;

// Calculate the total cost including shipping
var totalCost = subtotal + shippingCharges;

// Output the results
console.log("Price of Item 1: $" + priceItem1);
console.log("Price of Item 2: $" + priceItem2);
console.log("Quantity of Item 1: " + quantityItem1);
console.log("Quantity of Item 2: " + quantityItem2);
console.log("Shipping Charges: $" + shippingCharges);
console.log("----------------------------------");
console.log("Total Cost: $" + totalCost);

document.write("Shoping Cart"+"<br>")
document.write("Price of Item 1: $" + priceItem1+"<br>");
document.write("Price of Item 2: $" + priceItem2+"<br>");
document.write("Quantity of Item 1: " + quantityItem1+"<br>");
document.write("Quantity of Item 2: " + quantityItem2+"<br>");
document.write("Shipping Charges: $" + shippingCharges+"<br>");
document.write("----------------------------------"+"<br>");
document.write(" Total cost : $" + totalCost+"<br>")

//Q#8

// Variables for total marks and marks obtained
var totalMarks = 980;
var marksObtained = 804;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Output the result
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%"+"<br>");

//Q#9


// Variables for amount in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Conversion rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Total amount in Pakistani Rupees
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Output the result
console.log("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2));

document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2));

//Q#10

var number = 10;

var result = ((number + 5)*10 ) / 2;

console.log("Result: " + result);
document.write("Result: " + result+"<br>");

//Q#11

var currentYear = 2024;

var birthYear = 2002;

var result = currentYear - birthYear;
var age = result - 1;

// Output the ages to the screen
console.log("They are either " + result + " or " + age + " years old.");
document.write("They are either " + result + " or " + age + " years old."+" <br>");

//Q#12

var radius = 20;

var circumference = 2 * 3.142 * radius;
var result = circumference;
console.log(result);
var radius2 = 400;

var area = 3.142 * radius;
console.log(area);


document.write("Radius of a cricle is :20" +" "+" <br>"+"The circumference is"+""+result+" <br>");

document.writeln("The area is  :" + area+" <br>");

//Q#13

var Snack = "favourite snacks";

var currentAge = 15;

var maximumAge = 65;

// Store an estimated amount per day (as a number)
var amountPerDay = 3;

// Calculate how many snacks you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;

// Output the result to the screen
console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");