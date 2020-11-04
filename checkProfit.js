import * as classes from './classes.js';

const resultTemplate = (option) => {
    console.log("result Template"+ option);
    return `
    <div class="option" id="result">
        <h2>The best option is: <br>${option[0].name}</h2>
        <div>
            <p>Profitability parameter:</p>
            <p>${option[0].value.toFixed(2)}</p>
        </div>
    </div>
`};

const checkProfit = (results) => {
    results.sort((a,b) => b.value - a.value);
    return results
}

const checkOptions = (options) => {

    const results = options.map(option => {
        const profitability = ((Math.pow(option.diameter,2) * Math.PI) * option.quantity)/option.price;
        console.log(profitability);
        return new classes.Result(option.name, profitability);
    });

    const bestOption = checkProfit(results);
    console.log("Check options, best Option: " + bestOption);
    return resultTemplate(bestOption);
};

export default checkOptions;