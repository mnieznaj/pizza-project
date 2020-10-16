import * as classes from './classes';

interface Opt{
    name: string;
    quantity: number;
    diameter: number;
    price: number;
}
interface Res{
    name: string;
    value: number;
}

const resultTemplate = (option: Res[]) => {
    return `
    <div class="option" id="result">
        <h2>The best option is ${option[0].name}</h2>
        <div>
            <p>Profitability parameter:</p>
            <p>${option[0].value}</p>
        </div>
        <button class="button__submit button__submit--check-again">Sprawdź ponownie</button>
    </div>
`};

const checkProfit = (results: Res[]) => {
    results.sort((a,b) => b.value - a.value);
    return results
}

const checkOptions = (options: Opt[]) => {

    const results: Res[] = options.map(option => {
        const profitability = ((Math.pow(option.diameter,2) * Math.PI) * option.quantity)/option.price;
        console.log(profitability);
        return new classes.Result(option.name, profitability);
    });

    const bestOption = checkProfit(results);
    
    return resultTemplate(bestOption);
};

export default checkOptions;