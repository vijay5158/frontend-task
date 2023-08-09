// Get all the radio buttons for boxes
const radioButtons = document.querySelectorAll('input[type="radio"][name="box"]');

// Add click event listeners to each radio button
radioButtons.forEach(button => {
    button.addEventListener('click', handleBoxSelection);
});

// Function to handle box selection and expand the box
function handleBoxSelection(event) {
    const details1 = document.querySelector('.details1');
    const details2 = document.querySelector('.details2');
    const details3 = document.querySelector('.details3');
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const priceP = document.querySelector('#price');
    const radioButton = event.target
    if (radioButton.value==="1"){
        box1.classList.add("selected")
        box2.classList.remove("selected")
        box3.classList.remove("selected")
        details1.classList.add("details-selected")
        details2.classList.remove("details-selected")
        details3.classList.remove("details-selected")
        priceP.innerHTML="DKK 195.00"
    }   
    else if (radioButton.value==="2"){
        box2.classList.add("selected")
        box1.classList.remove("selected")
        box3.classList.remove("selected")
        details2.classList.add("details-selected")
        details1.classList.remove("details-selected")
        details3.classList.remove("details-selected")
        priceP.innerHTML="DKK 345.00"
    }   else if (radioButton.value==="3"){
        box3.classList.add("selected")
        box2.classList.remove("selected")
        box1.classList.remove("selected")
        details3.classList.add("details-selected")
        details2.classList.remove("details-selected")
        details1.classList.remove("details-selected")
        priceP.innerHTML="DKK 528.00"
    }    

}
