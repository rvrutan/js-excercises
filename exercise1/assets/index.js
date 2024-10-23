// total price = actual price of cube + taxes + shipping
// actual cost of cube
// function: does one thing and one thing only


var UNIT_PRICE = 11;
var TAX_RATE = 0.08;
var SHIPPING_COST = 4;

function getUnitPrice() {
    return UNIT_PRICE;
}

function getTaxes() {
    return UNIT_PRICE * TAX_RATE;
}

function getShipping() {
    return SHIPPING_COST;
}

function getNumberOfItems() {
    // we need to read from the html
    var quantity = document.getElementById("quantity").value;
    return quantity;
}

function getTotalCost() {
    var numberOfItems = getNumberOfItems()
    var totalCost = getUnitPrice() * numberOfItems +
        getTaxes() * numberOfItems + getShipping();
    alert(totalCost);
}
