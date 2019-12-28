function addNewOption(){
    let newOptionNo = document.getElementById('offers').getElementsByClassName('option').length;
    let lastSpot = document.getElementById('offers');

    lastSpot.innerHTML += '<div class="option"> <h2>Opcja '+newOptionNo+'</h2> <div id="option-'+ newOptionNo +'"> <p>Ilość sztuk w zestawie:</p> <input type="text" name="quantity" value=""><br> <p>Średnica:</p> <input type="text" name="diameter" value=""><br> <p>Cena:</p> <input type="text" name="price" value=""><br> </div> <button>Dodaj</button></div>';
};

function checkOptionsProfitability(option){
    let quantity = document.getElementById('option-'+option+'-1').value;
    console.log(quantity);
    let diameter = document.getElementById('option-'+option+'-2').value;
    console.log(diameter);
    let price = document.getElementById('option-'+option+'-3').value;
    console.log(price);

    let profitability = ((Math.pow(diameter,2) * Math.PI) * quantity)/price;
    console.log(profitability);
    return profitability;
};

let profitabilityResults = [0];

function checkGeneralProfitability(){
    let noOfOptions = document.getElementById('offers').getElementsByClassName('option').length-1;
    console.log(noOfOptions);
/*
    for(let i = noOfOptions; i>0; i-1){
        let newResult = [checkOptionsProfitability(i),"option-number-"+i];
        if(profitabilityResults[0] < newResult[0]){
        profitabilityResults = newResult;
        };
    };
*/
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

class optionData {
    constructor(quantity, diameter, price){
        
    }
};

function showResults(){
    let result = document.getElementById('results');
    result.innerHTML = '<div class="option"><h2>Najlepszą jest opcja nr X</h2><div><p>Ilość sztuk w zestawie:</p><p></p><br><p>Średnica:</p><p></p><br><p>Cena:</p><p></p><br></div><button>Sprawdź ponownie</button></div>';
    result.classList.toggle('hide-element');
    
    document.getElementById('offers').classList.toggle('hide-element');
}