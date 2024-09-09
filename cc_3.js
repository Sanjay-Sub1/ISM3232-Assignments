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
//Function that is used to calculate the average sales of an employee
function calculateAverageSales(sales){

let salesNumbers = 0;

for (let i =0; i <sales.length; i++){
salesNumbers += sales[i];
}
averageSales = salesNumbers / sales.length;

return averageSales;

}
//Function used to determine the performance rating of an employee
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

//Function used to find the top and bottom performers in a data set
function findTopAndBottomPerformers(salesPerPerson){
    const salesTotals = salesPerPerson.map(employee => {
        const totalSalesPerEmployee = employee.salesPerPerson.reduce((sum, sale) => sum + sale, 0);
        return {Name: employee.name, totalSalesPerEmployee};
    });

    const maxSalesFigure = Math.max(...salesTotals.map(employee => employee.totalSalesPerEmployee));
    const minSalesFigure = Math.min(...salesTotals.map(employee => employee.totalSalesPerEmployee));

    const topEmployee = salesTotals.find(employee => employee.totalSalesPerEmployee === maxSalesFigure);
    const bottomEmployee = salesTotals.find(employee => employee.totalSalesPerEmployee === minSalesFigure);

    return{topEmployee, bottomEmployee};

}

//Function used to generate a report of the Employees and their sales
function generatePerformanceReport(salesPerEmployees){
    let report = salesDataOfEmployees.map(employee => {
        var averageOfEmployee = calculateAverageSales(employee.sales);
        var performanceRatingOfEmployee = determinePerformanceRating(salesPerEmployee);
        return{Name: employee.name, averageSalesOfEmployee, performanceRatingOfEmployee};
    })
    let bestAndWorst = findTopAndBottomPerformers(salesPerEmployees.map(employee => ({employee.name,employee.sales.reduce(((sum, sale) => sum + sale, 0))}));

    return{report, bestAndWorst.topEmployee, bestAndWorst.bottomEmployee};

}

salesFigures = [100,200,300];
console.log(calculateAverageSales(salesFigures));

averageSalesAmount = calculateAverageSales(salesFigures);
console.log(determinePerformanceRating(averageSalesAmount));
