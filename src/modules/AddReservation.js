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
      item_id, username, date_start, date_end,
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
      //   const mainBody = document.querySelector('.product');
      // let theID;
      // mainBody.addEventListener('click', (e) => {
      //   const tar = e.target;
      //   theID = tar.parentElement.parentElement.parentElement.children[1].children[2].children[1].getAttribute('id');
      //   return parseFloat(theID)
      // })
        const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=10`;
        const objfromAPI = await AddReservation.getData({ url: URL });
        return objfromAPI;
      } catch (error) {
        throw new Error(error);
      }
    }

    // static appID = 'ed0LORUs5gJKQQ4QLOxZ'

    // static endPointMap = {
    //   mainurl: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    //   postReservationURL: `${AddReservation.appID}/reservations/`,
    // }

    static createDataToPostToAPI = async ({username, dateStart, dateEnd}, itemId) => {
      try {
        const reservationFromUI = new ReservationClass(itemId, username, dateStart, dateEnd);
        const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations/';
        // `${AddReservation.endPointMap.mainurl}${AddReservation.endPointMap.postReservationURL}`
        const postItNow = await AddReservation.postData(reservationFromUI, URL);
        return postItNow;
      } catch (error) {
        throw new Error(error);
      }
    }

    static htmlForReservationDOM = ({ username, date_start, date_end }) => {
      const UL = document.querySelector('.reservation-ul');
      const LI = document.createElement('li');
      LI.classList.add('object-li');
      LI.innerHTML = `<span>${date_start} - </span><span>${date_end}</span><span> by ${username}</span>`;
      UL.appendChild(LI);
    }
}
