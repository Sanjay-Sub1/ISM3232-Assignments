<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics Challenge</title>
</head>
<body>
    <h1>JavaScript Basics Coding Challenge</h1>
    <script src="cc_2.js"></script>
</body>
</html>

let bill = 300;
var tip = bill*0.2;
let finalBill = tip + bill;

function calculateTip(bill) {

if (50 <= bill <= 300){
tip = 0.15}
else if (bill >= 300){
tip = 0.2}
else{
tip = 0}

      return (tip*bill);
    
    }
let billPrice = 100;
console.log(calculateTip(billPrice));


console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${finalBill}`);

