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

function determinePerformanceRating(salesPerEmployee){
    if (salesPerEmployee > 10000)
    {return "Excellent";}
    else if (salesPerEmployee > 7000 && salesPerEmployee <= 10000)
    {return "Good";}
    else if (salesPerEmployee > 4000 && salesPerEmployee <= 7000)
    {return "Satisfactory";}
    else 
    {return "Needs Improvement";}

}


salesFigures = [100,200,300];
console.log(calculateAverageSales(salesFigures));

averageSalesAmount = calculateAverageSales(salesFigures);
console.log(determinePerformanceRating(averageSalesAmount));
