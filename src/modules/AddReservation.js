/* eslint-disable camelcase */
import FetchRequestClass from './MicroverseAPI.js';
import ReservationClass from './ReservationClass.js';

export default class AddReservation {
    static getData = async ({ url }) => {
      try {
        const fetchRequest = new FetchRequestClass({ url });
        const data = await fetchRequest.makeRequest();
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }

    static postData = async ({
      theID: item_id, username, dateStart: date_start, dateEnd: date_end,
    }, url) => {
      try {
        const fetchRequest = new FetchRequestClass({
          method: 'POST',
          body: {
            item_id,
            username,
            date_start,
            date_end,
          },
          url,
        });

        const data = await fetchRequest.makeRequest();
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }

    static getDataToUse = async () => {
      try {
        const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=10';
        const objfromAPI = await AddReservation.getData({ url: URL });
        return objfromAPI;
      } catch (error) {
        throw new Error(error);
      }
    }

    static createDataToPostToAPI = async (username, dateStart, dateEnd, itemId) => {
      try {
        const reservationFromUI = new ReservationClass(itemId, username, dateStart, dateEnd);
        const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations/';
        const postItNow = await AddReservation.postData({ reservationFromUI }, URL);
        return postItNow;
      } catch (error) {
        throw new Error(error);
      }
    }

    static displayOnUI = async () => {
      try {
        const fromAPI = await AddReservation.getDataToUse();
        fromAPI.forEach((one) => {
        // one.date_end.replace(/-/ig, '/')

          AddReservation.htmlForReservationDOM(one);
        });
      } catch (error) {
        throw new Error(error);
      }
      // const formBtn = document.querySelector('.reservation-date-form');
      // const [username, dateStart, dateEnd] = Array.from(formBtn.elements);
      // const user = username.value
      // const start = dateStart.value
      // const end = dateEnd.value
      // console.log(user, start, end)
      // const final = AddReservation.htmlForReservationDOM(user, start, end)
      // return final;
    }

    static htmlForReservationDOM = ({ username, date_start, date_end }) => {
      date_end = date_end.replace(/-/ig, '/')
      date_start = date_start.replace(/-/ig, '/')
      const UL = document.querySelector('.reservation-ul');
      const LI = document.createElement('li');
      LI.classList.add('object-li');
      LI.innerHTML = `<span>${date_start} - </span><span>${date_end}</span><span> by ${username}</span>`;
      UL.appendChild(LI);
    }
}
