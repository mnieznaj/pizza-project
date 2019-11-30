let quantity = document.getElementById("option-1").getElementsByName("quantity");
let diameter = document.getElementById("option-1").getElementsByName("diameter");
let price = document.getElementById("option-1").getElementsByName("price");

let profitability = ((Math.pow(diameter,2) * Math.PI) * quantity)/price;

