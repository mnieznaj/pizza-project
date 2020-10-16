import removeOffer from './removeOffer';

function formSection(label: string, name: string){
    const section = `<label>${label}:</label>
                        <input class="option__input" type="text" name="${name}" value="">
                        <br>
                    `;
    return section
}

const createOption = (optionId: number) => {

    const option = document.createElement("div");
    option.classList.add("offers__option option");
    
    const formSections: Array<string[]> = [
        ["Name offer", "offer-name"],
        ["No. of pizzas", "quantity"],
        ["Diameter", "diameter"],
        ["Price", "price"]
    ];

    const header = document.createElement("h2");
    header.classList.add("option__h2");
    header.textContent = `Option ${optionId}`;

    // give an X for deleting an offer

    const form = document.createElement("form");
    form.id = `option-${optionId}`;
    form.innerHTML += formSections.forEach(section => {
        return formSection(section[0], section[1])
    });

    // const btn = document.createElement("button");
    // btn.classList.add("button__submit button__submit--add-class");

    option.appendChild(header);
    option.appendChild(form);
    // option.appendChild(btn);

    return option;
}

export default createOption;