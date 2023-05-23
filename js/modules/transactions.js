const forms = document.querySelector('.forms');
const data = (localStorage.getItem('listTransactionCards') ? JSON.parse(localStorage.getItem('listTransactionCards')): {
    items: [] 
})

populateTransactionCards()
countExpenses()

function getDataObject(forms) {
    let objectDataForm = {};
    const formData = new FormData(forms);
    for(const [key, value] of formData.entries()) {
        objectDataForm[key] = value;
    }
    data.items.push(objectDataForm)
    addTransactionCard(objectDataForm)
    updateDataItems()
}

function updateDataItems() {
    localStorage.setItem('listTransactionCards', JSON.stringify(data))
}

function handleSubmit(event) {
    event.preventDefault(); 
    getDataObject(forms);
    countExpenses()
}

function countExpenses() {
    const countValue = document.querySelector('.count-expense')
    countValue.innerText = data.items.length
}


const btnSubmit = document.querySelector('#btnSubmit');
btnSubmit.addEventListener('click', handleSubmit);

function addTransactionCard(objectDataForm) {
            const divContent = document.querySelector('.content');
        
            const cardElement = document.createElement('section');
            cardElement.classList.add('counts')
        
            const detailCategoryElement = document.createElement('div');
            detailCategoryElement.classList.add('detail-category');
            
            const categoryElement = document.createElement('span');
            categoryElement.classList.add('category');
        
            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('description');
        
            const amountElement = document.createElement('p');
            amountElement.classList.add('amount');
        
            categoryElement.innerText = objectDataForm.category
            descriptionElement.innerText = objectDataForm.description
            amountElement.innerText = `R$ ${objectDataForm.amount}`
    
            detailCategoryElement.appendChild(categoryElement);
            detailCategoryElement.appendChild(descriptionElement);
    
            cardElement.appendChild(detailCategoryElement)
            cardElement.appendChild(amountElement)
            
            divContent.appendChild(cardElement);
}

function populateTransactionCards() {
    data.items.forEach((objectDataForm) => {
        addTransactionCard(objectDataForm);
    });
}
export default data;