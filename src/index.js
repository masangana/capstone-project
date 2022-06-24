/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import API from './modules/MicroverseAPI';
import ModalView from './modules/CommentView';
import Util from './modules/Util';

const modalView = new ModalView();
const modalContainer = modalView.createModal();

const api = new API();
const util = new Util();

const popupButton = document.querySelectorAll('.popup');
// console.log(popupButton);

const overlay = document.createElement('div');
document.body.appendChild(overlay);
overlay.classList.add('overlay');

popupButton.forEach((pupup) => {
  pupup.addEventListener('click', async (e) => {
    const id = e.target.closest('.food').getAttribute('dataset');
    const res = await api.getItemByID(id);
    const modal = document.querySelector('.modal');
    modal.setAttribute('dataset', `${id}`);
    modalContainer.modalTitle.innerHTML = res.meals[0].strMeal;
    modalContainer.modalClose.innerHTML = '&times;';
    modalContainer.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);
    modalContainer.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;
    const storedComments = await api.getComments(id);
    util.loadComments(storedComments, modalContainer);
    util.openModal(modal, overlay);
  });
});

modalContainer.modalClose.addEventListener('click', (e) => {
  const modal = (e.target.closest('.modal'));
  util.closeModal(modal, overlay);
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    util.closeModal(modal, overlay);
  });
});

modalContainer.submitButton.addEventListener('click', async (e) => {
  const commentName = document.querySelector('.comment-name');
  const comment = document.querySelector('.comment');
  const itemID = e.target.closest('.modal').getAttribute('dataset');
  if (commentName.value === '' || comment.value === '') {
    return;
  }
  api.postComments(itemID, commentName.value, comment.value)
    .then(() => api.getComments(itemID))
    .then((storedComments) => {
      util.loadComments(storedComments, modalContainer);
      commentName.value = '';
      comment.value = '';
    });
});