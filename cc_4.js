<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics Challenge</title>
</head>
<body>
    <h1>JavaScript Basics Coding Challenge</h1>
    <script src="cc_4.js"></script>
</body>
</html>

//Creates an array for the inventory of products in the store, including the price, quantity, and how many items are needed for the product to not be at low stock
const inventory = [
    {name : "GPU",price : 450, quantity : 0, lowStockLevel : 5},
    {name : "CPU", price : 250, quantity : 25, lowStockLevel : 5},
    {name : "Keyboard", price : 70, quantity : 30, lowStockLevel : 10},
    {name : "Mouse", price : 25, quantity : 75, lowStockLevel : 15},
    {name : "Monitor", price : 100, quantity : 2, lowStockLevel : 2}
];

function displayProductDetails(products){
    let stockStatus;
//updates stock status to in stock if the quantity is more than the low stock level
    if (products.quantity > products.lowStockLevel){
        stockStatus = "In Stock";
    }
//updates stock status to out of stock if the quantity is 0 as a safeguard
    else if (products.quantity == 0){
        stockStatus = 'Out of Stock;'
    }
//updates the stock status to low stock if the quantity is below or equal to the low stock level
    else {
        stockStatus = "Low Stock";
    }
//logs the name, the price, the quantity and the stock status of the product
    console.log(`Name: ${products.name}`);
    console.log(`Price: ${products.price}$`);
    console.log(`Quantity: ${products.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}

//creates a function to update the quantity of the product as well as updating the status of said product
function updateStock(products,unitsSold){
//Used to subtract units sold from the original quantity
    products.quantity = products.quantity - unitsSold;
//Displays out of stock message if quantity = 0
    if (products.quantity == 0){
        console.log(`${products.name} is out of stock`);
    }
//Displays low stock message if quantity is below or equal to the low stock level
    else if (products.quantity <= products.lowStockLevel){
        console.log(`${products.name} is in low stock`);
    }
//Displays in stock message if quantity is above the low stock level
    else{
        console.log(`${products.name} is in stock`);
    }
}
//Function to check if an item is in low stock or in stock
function checkLowStock(stock){
//Iterates over the array to check if each product is above the lowStockLevel signified in the array
    for (let i = 0; i < stock.length; i++){
        if (stock[i].quantity <= stock[i].lowStockLevel){
            console.log(`${stock[i].name} is low in stock`);
        }
        else{
            console.log(`${stock[i].name} is in stock`);
        }
    }
}

//creates the variable GPU to pull from the array
GPU = inventory[0];
//creates the variable monitor to pull from the array
monitor = inventory[4];
//Runs the function for the variable GPU
displayProductDetails(GPU);
//runs the function for the variable monitor
displayProductDetails(monitor);
//Used to the test the update stock function
updateStock(inventory[3],65);
