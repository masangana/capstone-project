import API from './MicroverseAPI';
import Util from './utilRervation';
import ModalView from './ReservationView'

const modalView = new ModalView()
const modalContainer = modalView.createModal();

const api = new API();
const util = new Util();
export default class Reservation {

  static reservationFunc = () => {

    const overlay = document.createElement('div');
    document.body.appendChild(overlay);
    overlay.classList.add('overlay');

    window.onload = () => {
  setTimeout(() => {
    // commet section code starts
    const popupButton = document.querySelectorAll('.reservation-button');
    popupButton.forEach((pupup) => {
      pupup.addEventListener('click', async (e) => {
        const id = e.target.getAttribute('data-index');
        const res = await api.getItemByID(id);
        const modal = document.querySelector('.modal-resever');
        modal.setAttribute('dataset', `${id}`);
        modalContainer.modalTitle.innerHTML = res.meals[0].strMeal;
        modalContainer.modalClose.innerHTML = '&times;';
        modalContainer.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);
        modalContainer.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;
        const storedComments = await api.getReservation(id);
        util.loadData(storedComments, modalContainer);
        util.openModal(modal, overlay);
      });
    });
    modalContainer.modalClose.addEventListener('click', (e) => {
      const modal = (e.target.closest('.modal-resever'));
      util.closeModal(modal, overlay);
    });
    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal-resever.active');
      modals.forEach((modal) => {
        util.closeModal(modal, overlay);
      });
    });

    modalContainer.submitButton.addEventListener('click', async (e) => {
      const reservationName = document.querySelector('.reservation-name');
      const startDate = document.querySelector('.start-date');
      const endDate = document.querySelector('.end-date');
      
      const itemID = e.target.closest('.modal-resever').getAttribute('dataset');
      if (reservationName.value === '' || startDate.value === '' || endDate.value === '') {
        return;
      }
      api.postComments(itemID, reservationName.value, startDate.value, endDate.value)
        .then(() => api.getComments(itemID))
        .then((storedComments) => {
          util.loadData(storedComments, modalContainer);
          reservationName.value = '';
          startDate.value = '';
          endDate.value = '';
        });
    });
  }, 500)
}
  }
}