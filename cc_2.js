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

let billAmounts1 = [275,40,430];
let billAmounts2 = [125,555,44];

function calculateTip(bill) {

if (50 <= bill <= 300){
tip = 0.15}
else if (bill >= 300){
tip = 0.2}
else{
tip = 0.2}

      return (tip*bill);
    
    }
let billPrice = 100;
console.log(calculateTip(billPrice));


console.log(tip);

const tips1 = billAmounts1.map(bill => calculateTip(bill));
const tips2 = billAmounts2.map(bill => calculateTip(bill));
const total1 = billAmounts1 + tips1;
const total2 = billAmounts2 + tips2;
console.log(tips1);
console.log(tips2);
console.log(total1);
console.log(total2);

