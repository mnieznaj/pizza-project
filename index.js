import startTemplate from './startTemplate.js';
import checkProfit from './checkProfit.js';
import * as classes from './classes.js'

const offersSection = document.getElementById("offers");
const compareBtn = document.getElementById("button-compare");
const refreshBtn = document.getElementById("button-refresh");

const createOption = (optionId) => {
    const option = `
    <div class="offers__option option">
    <form id="option-${optionId}">
        <label class="option__label">Name:</label>
        <input class="option__input" id="option-${optionId}-1" type="text" name="name" required><br>
        <label class="option__label">How many pizzas?</label>
        <input class="option__input" id="option-${optionId}-2" type="text" name="quantity" required><br>
        <label class="option__label">Diameter:</label>
        <input class="option__input" id="option-${optionId}-3" type="text" name="diameter" required><br>
        <label class="option__label">Price</label>
        <input class="option__input" id="option-${optionId}-4" type="text" name="price" required><br>
    </form>
    </div>
    `;

    return option;
}

const addNewOffer = (e) => {
    const offersNo = document.querySelectorAll(".option").length;
    console.log("No of offers quersy selector all: " + offersNo);

    if(offersNo <= 7){
        const id = offersNo.length + 1;
        document.getElementById("offers").insertAdjacentHTML('beforeEnd',createOption(id));
    } else if(offersNo == 8){
        const id = offersNo.length + 1;
        document.getElementById("offers").insertAdjacentHTML('beforeEnd',createOption(id));
        document.getElementById("add-new-option").remove();
    }
}

const collectData = () => {
    let optionsList = document.getElementsByClassName("option");
    console.log(optionsList);
    const offerValues= [];

    for(let i = 0; i < optionsList.length-1; i++){
        console.log(optionsList[i]);
        const name = document.getElementById(`option-${i+1}-1`).value;
        console.log("name: " + name);
        const quantity = document.getElementById(`option-${i+1}-2`).value;
        console.log("quantity: " + quantity);
        const diameter = document.getElementById(`option-${i+1}-3`).value;
        console.log("diameter: " + diameter);
        const price = document.getElementById(`option-${i+1}-4`).value;
        console.log("price: " + price);
        offerValues.push(new classes.optionParameters(name, quantity, diameter, price));
    };
    console.log(offerValues);

    offersSection.innerHTML = checkProfit(offerValues);
}

const startApp = () => {
    offersSection.innerHTML = startTemplate;
    const addOption = document.getElementById("add-option-btn");
    addOption.addEventListener("click", addNewOffer);
}

startApp();

compareBtn.addEventListener("click", collectData);
refreshBtn.addEventListener("click", startApp);