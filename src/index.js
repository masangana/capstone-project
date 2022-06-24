/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
/* eslint-disable import/extensions */
import _ from 'lodash';
import './style.scss';
import { getData, countItem } from './foodapi.js';
import { getLikes, postLike} from './modules/likeapi.js';
import API from './modules/MicroverseAPI';
import ModalView from './modules/CommentView';
import Util from './modules/Util';

const modalView = new ModalView();
const modalContainer = modalView.createModal();

const api = new API();
const util = new Util();

const overlay = document.createElement('div');
document.body.appendChild(overlay);
overlay.classList.add('overlay');

countItem();
getData();

window.onload = () => {
  let likeBtn;
  let likeNumber;
  setTimeout(() => {
    // commet section code starts
    const popupButton = document.querySelectorAll('.comment-button');
    popupButton.forEach((pupup) => {
      pupup.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-index');
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

    // comment section code ends

    // show the like
    likeNumber = document.querySelectorAll('.likeNumber');
    likeNumber.forEach((element) => {
      element.textContent = '0';
      const vuelike = async () => {
        const result = await getLikes();
        result.forEach((el) => {
          const exists = Object.values(el).includes(element.getAttribute('data-index'));
          if (exists) {
            return element.textContent = el.likes;
          }
        });
      };
      vuelike();
    });
    // like button setup for action
    likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        //
        likeNumber.forEach((Number) => {
          const vuelikeUpdate = async () => {
            const result = await getLikes();
            result.forEach((el) => {
              const exists = Object.values(el).includes(Number.getAttribute('data-index'));
              if (exists) {
                return Number.textContent = el.likes;
              }
            });
          };
          vuelikeUpdate();
        });
        postLike(btn.getAttribute('data-index'));
      });
    });
  }, '1000');
};

// eslint-disable-next-line linebreak-style
// eslint-disable-next-line import/first
import Reservation from './modules/AddReservation';

Reservation.reservationFunc()