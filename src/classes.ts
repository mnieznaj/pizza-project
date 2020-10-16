export class optionParameters {
    name: string;
    quantity: number;
    diameter: number;
    price: number;

    constructor(name : string, quantity: number, diameter: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.diameter = diameter;
        this.price = price;
    }
};
export class Result {
    name: string;
    value: number;

    constructor(name: string, value: number){
        this.name = name;
        this.value = value
    }
};

