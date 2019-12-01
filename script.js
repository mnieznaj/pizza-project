function addNewOption(){
    let newOptionNo = document.getElementById('offers').getElementsByClassName('option').length;
    let lastSpot = document.getElementById('offers');

    lastSpot.innerHTML += '<div class="option"> <h2>Opcja '+newOptionNo+'</h2> <div id="option-'+ newOptionNo +'"> <p>Ilość sztuk w zestawie:</p> <input type="text" name="quantity" value=""><br> <p>Średnica:</p> <input type="text" name="diameter" value=""><br> <p>Cena:</p> <input type="text" name="price" value=""><br> </div> <button>Dodaj</button></div>';
};

function checkOptionsProfitability(option){
    let quantity = document.getElementById('option-'+option+'-1').value;
    let diameter = document.getElementById('option-'+option+'-2').value;
    let price = document.getElementById('option-'+option+'-3').value;

    let profitability = ((Math.pow(diameter,2) * Math.PI) * quantity)/price;
    return profitability;
};



//TO CO JEST PONIZEJ NARAZIE NIE DZIAŁA LUB NIE JEST UMIESZCZONE W APCE

let profitabilityResults= [0,null];

function checkGeneralProfitability(){
    let noOfOptions = document.getElementById('offers').getElementsByClassName('option').length-1;

    for(i = noOfOptions; i>=0; i-1){

        let newResult = [checkOptionsProfitability(i),"option-number-"+i];

        if(profitabilityResults[0] < newResult[0]){
        profitabilityResults = newResult;
        }
    };
    return profitabilityResults;
    //sprawdzić kolejne pozycje w tabeli i podać największą
}