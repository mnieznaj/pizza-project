const createOption = (optionId) => {
    const option = `
    <div class="offers__option option">
    <form id="option-${optionId}">
        <label>Name:</label>
        <input class="option__input" id="option-${optionId}-1" type="text" name="name" value=""><br>
        <label>How many pizzas?</label>
        <input class="option__input" id="option-${optionId}-2" type="text" name="quantity" value=""><br>
        <label>Diameter:</label>
        <input class="option__input" id="option-${optionId}-3" type="text" name="diameter" value=""><br>
        <label>Price</label>
        <input class="option__input" id="option-${optionId}-4" type="text" name="price" value=""><br>
    </form>
    </div>
    `;

    return option;
}

const addNewOffer = () => {
    const offersNo = document.querySelectorAll(".option").length;

    if(offersNo <= 7){
        const id = offersNo.length + 1;
        document.getElementById("offers").innerHTML += createOption(id);
    }
}

export default addNewOffer;