// eslint-disable-next-line no-unused-vars
/* eslint-disable import/extensions */
import _ from 'lodash';
import './style.scss';
// import EventListerners from './modules/ReservationEventListener';
import AddReservation from './modules/AddReservation';
import { getData, countItem } from './foodapi.js';
import { getLikes, postLike, getCom } from './modules/likeapi.js';
import openPopup from './modules/displayModal.js';
import ReservationClass from './modules/ReservationClass.js';
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

// import { specialID } from './modules/AddReservation'
// const individualAPI = EventListerners.fetchIt()
// export { individualAPI }
countItem();
getData();

// const IDnum = () =>   {
//     window.addEventListener('load', () => {
//        setTimeout(function() {
//        const allOF = document.querySelectorAll('.reservation-button')
//        allOF.forEach((button) => {
//         console.log(button.getAttribute('id'))
//        })
//    }, 500)
//     })
//    }

//    IDnum()

// call the view in the main page
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
    // create reservation
    const reservationbtn = document.querySelectorAll('.reservation-button');
    // console.log(reservationbtn)
    reservationbtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const vupopup = async () => {
          const vueComment = async () => {
            // UL.innerHTML = ''
            const result = await getCom(btn.getAttribute('data-index'));
            console.log(result);
          };
          vueComment();
          openPopup(btn.getAttribute('data-index'));
          setTimeout(() => {
            const formSub = document.getElementById(btn.getAttribute('data-index'));
            // console.log(formSub)

            const UL = document.querySelector('.reservation-ul');
            formSub.addEventListener('submit', async (e) => {
              const [username, dateStart, dateEnd] = Array.from(formSub.elements);
              const user = username.value;
              const start = dateStart.value;
              const end = dateEnd.value;
              const idTem = btn.getAttribute('data-index');
              console.log(user, start, end, idTem);
              const ReservationClas = new ReservationClass(idTem, user, start, end);
              const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations/';
              const creatNew = AddReservation.postData(ReservationClas, URL);
              username.value = '';
              dateStart.value = '';
              dateEnd.value = '';
              UL.innerHTML = '';

              setTimeout(() => {
                // UL.innerHTML = ''
                console.log(idTem);
                // AddReservation.displayOnUI(idTem)
              }, 1000);

              const vueComment = async () => {
                // UL.innerHTML = ''
                const result = await getCom(idTem);
                console.log(result);
              };
              vueComment();

              return creatNew;
            });
          }, 1000);
        };
        // console.log(btn.getAttribute("data-index"))
        vupopup();
      });
    });
    // end reservation
    // submit form

    // end
    // create submi btn

    const submitBtn = document.querySelectorAll('.sendBtn');
    console.log(submitBtn);
    submitBtn.forEach((subBtn) => {
      // console.log(subBtn);
      subBtn.addEventListener('click', () => {
        const senData = async () => {
          console.log(subBtn.getAttribute('data-index'));
        };
        // console.log(btn.getAttribute("data-index"))
        senData();
      });
    });

    // end

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

// EventListerners.buttonSubmit();
// specialID()
// load the basic info
// EventListerners.reserveBtn();
// EventListerners.closeBtn();
// AddReservation.getDataToUse();
// EventListerners.windowLoad();
