// Calulates BMI ( Boday Mass Index )

// Variables for weight and height
let weight = 95;
let height = 1.74;

// Calculate BMI
let bmi = weight / ( height * height );

// Print the result
console.log("Your Body Mass Index (BMI) is: " + bmi.toFixed(2));

// Calculate Simple Interest ( principle * rate * time )

// Variables for principal, rate, and time
let principal = 1000;
let rate = 1.5
let time = 3 // Time in years

// Calculate Interest
let interest = principal * rate * time

// Print the result
console.log("The Interest is : " + interest.toFixed(2));

// Convert Currency ( USD to local currency )

// Variables for amount in USD and exchange rate
let moneyUSD = 25;
let exchangeRate = 25559; // Exchange Rate USD to VND ( 1 USD = 25559 VND )

// Convert USD to VND
let moneyVND = moneyUSD * exchangeRate;

// Output
console.log("Amount in VND : " + moneyVND);

// Calculate Time ( hours:minutes:seconds )

let now = new Date();

// Get hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let currentTime = `${hours}:${minutes}:${seconds}`;

// Current time
console.log("Current Time : " + currentTime);
