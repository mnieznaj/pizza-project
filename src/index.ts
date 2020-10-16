import addNewOffer from './addNewOffer';
import startTemplate from './startTemplate';
import checkProfit from './checkProfit';
import * as classes from './classes'

const offersSection = document.getElementById("offers");
const checkBtn = document.getElementById("button-submit");

const collectData = () => {
    let optionsList = document.getElementsByClassName("option");
    optionsList = optionsList.map(option => {
        const name: string = option.getElementByName("name").value;
        const quantity: number = option.getElementByName("quantity").value;
        const diameter: number = option.getElementByName("diameter").value;
        const price: number = option.getElementByName("price").value;
        new classes.optionParameters(name, quantity, diameter, price);
    });
    offersSection.innerHTML = checkProfit(optionsList);
}
checkBtn.addEventListener("click", collectData);

const startApp = () => {
    offersSection.innerHTML = startTemplate;
    const addOption = document.getElementById("add-option-btn");
    addOption.addEventListener("click", addNewOffer);
}

startApp();

