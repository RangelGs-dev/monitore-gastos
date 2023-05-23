// import getDataObject from "./transactions.js";
// console.log(getDataObject)

// export default function createCard(getDataObject) {
//     getDataObject.array.forEach(objectFormData => {
//         function ObjectCard() {
//             const divContent = document.querySelector('.content');
        
//             const cardElement = document.createElement('section');
//             cardElement.classList.add('counts')
        
//             const detailCategoryElement = document.createElement('div');
//             detailCategoryElement.classList.add('detail-category');
            
//             const categoryElement = document.createElement('span');
//             categoryElement.classList.add('category');
        
//             const descriptionElement = document.createElement('p');
//             descriptionElement.classList.add('description');
        
//             const amountElement = document.createElement('p');
//             amountElement.classList.add('amount');
        
//             this.element = function() {
//                 categoryElement.innerText = this.category
//                 descriptionElement.innerText = this.description
//                 amountElement.innerText = `R$ ${this.amount}`
        
//                 detailCategoryElement.appendChild(categoryElement);
//                 detailCategoryElement.appendChild(descriptionElement);
        
//                 cardElement.appendChild(detailCategoryElement)
//                 cardElement.appendChild(amountElement)
                
//                 divContent.appendChild(cardElement);
        
//             //    return cardElement
//             }
//         }

//         const createElement = new ObjectCard()
//         createElement.element.call(objectFormData)
        
//     });
// }

// // function populatingWithData() {
// //     if(!data.items.length) return
// //     for(let i = 0; i < data.items.length; i++) {
// //         const {}
// //     }
// // }

// // console.log(objectDataForm)
// // const createElement = new ObjectCard()