const bookAdditionForm = document.getElementById('form');

const additionButton = document.getElementById('newBtn');

const bookAdditionModal = document.getElementById('popUp');

const closeIcon = document.querySelector('.close');

function displayModal(){
    bookAdditionModal.style.display = "contents";
}

function hideModal(){
    bookAdditionModal.style.display = "none";
}

additionButton.addEventListener("click", displayModal)
additionButton.addEventListener("mousemove", displayModal);
closeIcon.addEventListener("click", hideModal);
closeIcon.addEventListener("mousemove", hideModal);
bookAdditionForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

////book constructor
class Book{
    constructor(title, author, pages, read){
        this.title = form.title.value
        this.author = form.author.value
        this.pages = form.pages.value + 'pg';
        this.read = form.read.checked;
    }
}


////create book from constructorr and add to library
let myLibrary = []
let newBook 