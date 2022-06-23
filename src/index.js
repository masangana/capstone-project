// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import API from './modules/MicroverseAPI.js';
// import './style.css';
const api = new API();
const popupButton = document.querySelectorAll('.popup');

const modal = document.createElement('div');
const modalHeader = document.createElement('modal-header');
const modalBody = document.createElement('div');
const modalTitle = document.createElement('h3');
const modalClose = document.createElement('button');
const overlay = document.createElement('div');
const itemImg = document.createElement('img');
const itemDescription = document.createElement('p');
const ingredients = document.createElement('ul');
const commentForm = document.createElement('form');
const name = document.createElement('input');
const comment = document.createElement('textarea');
const submitButton = document.createElement('button');
const commentDiv = document.createElement('div');
const commentHeader = document.createElement('h3');
const formHeader = document.createElement('h3');

modal.classList.add('modal');
modalHeader.classList.add('modal-header');
modalTitle.classList.add('title');
modalClose.classList.add('close-button');
modalBody.classList.add('modal-body');
overlay.classList.add('overlay');
name.classList.add('comment-name');
comment.classList.add('comment');

modal.setAttribute('id', 'modal');
itemImg.setAttribute('height', '100');
name.setAttribute('type', 'text');
name.setAttribute('placeholder', 'Your name');
comment.setAttribute('placeholder', 'Your insights');
submitButton.setAttribute('type', 'submit');
commentForm.setAttribute('onSubmit', 'return false');

submitButton.innerHTML = 'Submit';

document.body.appendChild(modal);
document.body.appendChild(overlay);
modal.appendChild(modalHeader);
modal.appendChild(modalBody);
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(modalClose);
modalBody.appendChild(ingredients);
modalBody.appendChild(itemImg);
modalBody.appendChild(itemDescription);
modalBody.appendChild(commentDiv);
modalBody.appendChild(commentForm);
commentForm.appendChild(formHeader);
commentForm.appendChild(name);
commentForm.appendChild(comment);
commentForm.appendChild(submitButton);

formHeader.innerHTML = 'Add a Comment';

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
function loadComments(storedComments) {
  commentDiv.innerHTML = '';
  commentHeader.innerHTML = `Comments(${storedComments.length})`;
  commentDiv.appendChild(commentHeader);
  storedComments.forEach((item) => {
    const commentParagraph = document.createElement('p');
    commentParagraph.innerHTML = `${item.creation_date} ${item.username}: ${item.comment}`;
    commentDiv.appendChild(commentParagraph);
  });
}

popupButton.forEach((pupup) => {
  pupup.addEventListener('click', async (e) => {
    const id = e.target.closest('.food').getAttribute('dataset');
    const res = await api.getItemByID(id);
    const modal = document.querySelector('.modal');
    modal.setAttribute('dataset', `${id}`);
    modalTitle.innerHTML = res.meals[0].strMeal;
    modalClose.innerHTML = '&times;';
    itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);
    itemDescription.innerHTML = `${res.meals[0].strInstructions}`;
    const storedComments = await api.getComments(id);
    loadComments(storedComments);
    openModal(modal);
  });
});

modalClose.addEventListener('click', (e) => {
  const modal = (e.target.closest('.modal'));
  closeModal(modal);
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

submitButton.addEventListener('click', async (e) => {
  const commentName = document.querySelector('.comment-name');
  const comment = document.querySelector('.comment');
  const itemID = e.target.closest('.modal').getAttribute('dataset');
  await api.postComments(itemID, commentName.value, comment.value);
  const storedComments = await api.getComments(itemID);
  loadComments(storedComments);
  commentName.value = '';
  comment.value = '';
});