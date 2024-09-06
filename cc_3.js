<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics Challenge</title>
</head>
<body>
    <h1>JavaScript Basics Coding Challenge</h1>
    <script src="cc_3.js"></script>
</body>
</html>

function calculateAverageSales(sales){

let salesNumbers = 0;

for (let i =0; i <sales.length; i++){
salesNumbers += sales[i];
}
averageSales = salesNumbers / sales.length;

return averageSales;

}

salesFigures = [100,200,300];
console.log(calculateAverageSales(salesFigures));

