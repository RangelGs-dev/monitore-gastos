export default function modal() {
    const btnTransaction = document.querySelector('li:first-child');
    const modalContainer = document.querySelector('.modal-container');

    const btnCloseModal = document.querySelector('.closeBtnModal')

    function btnTransactionAtive() {
        modalContainer.classList.add('active');
        document.querySelector(".mySidebar").style.width = "0";
        document.querySelector(".main-container").style.marginLeft = "0";
        document.querySelector(".main").style.display = "block";
    }

    btnTransaction.addEventListener('click', btnTransactionAtive);

    function btnTransactionRemove() {
        modalContainer.classList.remove('active');
    }
    btnCloseModal.addEventListener('click', btnTransactionRemove);
}

