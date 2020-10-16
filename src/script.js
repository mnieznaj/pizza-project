//option 1 array, names array
const inputNames = ['quantity','diameter','price'];
const profitabilityResults = [0];
const optionsCollection = [];

// const resultTemplate = `
//     <div class="option">
//     <h2>Najlepszą jest opcja nr X</h2>
//     <div>
//         <p>Ilość sztuk w zestawie:</p>
//         <p></p>
//         <br>
//         <p>Średnica:</p>
//         <p></p>
//         <br>
//         <p>Cena:</p>
//         <p></p>
//         <br>
//     </div>
//     <button class="button__submit button__submit--check-again">Sprawdź ponownie</button>
//     </div>
// `;

// function addNewOption(){
//     const newOptionNo = document.getElementById('offers').getElementsByClassName('option').length;
//     const lastSpot = document.getElementById('offers');

//     const optionHTMLTemplate = `
//         <div class="offers__option option">
//             <h2 class="option__h2">Opcja ${newOptionNo}</h2>
//             <form id="option-${newOptionNo}</">
//                 <p>Ilość sztuk w zestawie:</p>
//                     <input class="option__input" id="option-${newOptionNo}-1" type="number" name="quantity" value=""><br>
//                 <p>Średnica:</p>
//                     <input class="option__input" id="option-${newOptionNo}-2" type="number" name="diameter" value=""><br>
//                 <p>Cena:</p>
//                     <input class="option__input" id="option-${newOptionNo}-3" type="number" name="price" value=""><br>
//             </form>
//             <button class="button__submit button__submit--add-class" >Dodaj</button>
//         </div>
//     `;
//     lastSpot.innerHTML += optionHTMLTemplate;
//     lastSpot.lastElementChild.querySelector('button').addEventListener('click', collectOption);
// };

function checkOptionsProfitability(option){
    const quantity = document.getElementById('option-'+option+'-1').value;
    const diameter = document.getElementById('option-'+option+'-2').value;
    const price = document.getElementById('option-'+option+'-3').value;

    let profitability = ((Math.pow(diameter,2) * Math.PI) * quantity)/price;
    console.log(profitability);
    return profitability;
};

function checkGeneralProfitability(){
    let noOfOptions = document.getElementById('offers').getElementsByClassName('option').length-1;
    console.log(noOfOptions);

    while(noOfOptions > 0){
        let newResult = [checkOptionsProfitability(noOfOptions),"option-number-"+noOfOptions];
        console.log('new result '+newResult);
        if(profitabilityResults[0] < newResult[0]){
        profitabilityResults = newResult;
        };
        console.log(profitabilityResults[0]);
        noOfOptions --;
    }
    console.log(profitabilityResults);
}


// class optionData {
//     constructor(name, quantity, diameter, price){
//         //przygotować sposób tworzenia nazwy
//         this.name = 'option-number-'+ document.getElementsByClassName('option').length;
//         this.quantity = quantity;
//         this.diameter = diameter;
//         this.price = price;
//     }
// };

// function collectOption(event){
//     const nameValue = 0;
//     const quantityValue = event.target.parentElement.name('quantity').value;
//     console.log(quantityValue);
//     const diameterValue = 0;
//     const priceValue = 0;
// }

function showResults(){
    checkGeneralProfitability();
    const result = document.getElementById('results');
    result.innerHTML = '';
    result.innerHTML += resultTemplate;
    result.classList.toggle('hide-element');
    
    document.getElementById('offers').classList.toggle('hide-element');
};