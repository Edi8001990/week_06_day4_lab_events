document.addEventListener('DOMContentLoaded', () => {




  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);



});




const handleFormSubmit = function(event) {
  event.preventDefault();

const newReadingListItem = document.createElement('li');
  newReadingListItem.classList = ".reading-list-item";

const newHeaderItem = document.createElement('h2');
newHeaderItem.textContent = `${this.title.value}`;
newReadingListItem.appendChild(newHeaderItem);

const newHeaderTwoItem = document.createElement('h3');
newHeaderTwoItem.textContent = `${this.author.value}`;
newReadingListItem.appendChild(newHeaderTwoItem);

const newParagraphItem = document.createElement('p');
newParagraphItem.textContent = `${this.category.value}`;
newReadingListItem.appendChild(newParagraphItem);





const list = document.querySelector('ul');
list.appendChild(newReadingListItem);
const resultParagraph = document.querySelector('#reading-list');

}
