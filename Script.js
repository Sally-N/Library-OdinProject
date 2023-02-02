const bookAdditionForm = document.getElementById('form');

const additionButton = document.getElementById('newBtn');

const bookAdditionModal = document.getElementById('popUp');

const closeIcon = document.querySelector('.close');

function displayModal(){
    bookAdditionModal.style.display = "contents";
}

function hideModal(){
    bookAdditionForm.style.display = "none";
}

additionButton.addEventListener("click", displayModal)
additionButton.addEventListener("mousemove", displayModal);
closeIcon.addEventListener("click", hideModal);
closeIcon.addEventListener("mousemove", hideModal);

