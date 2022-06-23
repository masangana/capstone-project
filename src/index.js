// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import getData from './foodapi.js';
import AddReservation from './modules/AddReservation';
// import { specialID } from './modules/AddReservation'
// const individualAPI = EventListerners.fetchIt()
// export { individualAPI }
getData();


EventListerners.buttonSubmit();
// specialID()
// load the basic info
EventListerners.reserveBtn();
EventListerners.closeBtn();
AddReservation.getDataToUse();
EventListerners.windowLoad()


const IDnum = () =>   {
    window.addEventListener('load', () => {
       setTimeout(function() {
       const allOF = document.querySelectorAll('.reservation-button')
       allOF.forEach((button) => {
        console.log(button.getAttribute('id'))
       })
   }, 500)
    })
   }

   IDnum()