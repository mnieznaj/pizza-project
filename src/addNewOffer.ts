import createOption from './createOption';

const addNewOffer = () => {
    const offersNo: number = document.querySelectorAll(".option").length;

    if(offersNo <= 7){
        const id: number = new Date().getTime();
        document.getElementById("offers").appendChild(createOption(id));
    }
}

export default addNewOffer;