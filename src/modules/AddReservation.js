/* eslint-disable camelcase */
import FetchRequestClass from './MicroverseAPI.js';
import ReservationClass from './ReservationClass.js';

// const specialID = () => {
// const mainBody = document.querySelector('.product');
//     mainBody.addEventListener('click', (e) => {
//     const tar = e.target;
//     if (!tar.classList.contains('reservation-button')) return;
//     else {
//     const num =  tar.getAttribute('id')
//      return num
//     }
//     })
//   }
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

    static getDataToUse = async (idIem) => {
      try {
    const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=${idIem}`;
        const objfromAPI = await AddReservation.getData({ url: URL });
        return objfromAPI;
      } catch (error) {
        throw new Error(error);
      }
      setTimeout(() => {
        
      }, 1000);
    }

    static displayOnUI = async (idIem) => {
      try {
        const fromAPI = await AddReservation.getDataToUse(idIem);
        fromAPI.forEach((one) => {
          AddReservation.htmlForReservationDOM(one);
        });
      } catch (error) {
        throw new Error(error);
      }

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

// const IDnum = () =>   {
//   window.addEventListener('load', () => {
//      setTimeout(function() {
//      const allOF = document.querySelectorAll('.reservation-button')
//      console.log(allOF)
//  }, 500)
//   })
//  }

//  IDnum().forEach((pupup) => {
//   pupup.addEventListener('click', async (e) => {
//     const id = e.target.closest('.food').getAttribute('dataset');
//     const res = await api.getItemByID(id);
//     const modal = document.querySelector('.modal');
//     modal.setAttribute('dataset', `${id}`);
//     modalContainer.modalTitle.innerHTML = res.meals[0].strMeal;
//     modalContainer.modalClose.innerHTML = '&times;';
//     modalContainer.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);
//     modalContainer.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;
//     const storedComments = await api.getComments(id);
//     loadComments(storedComments);
//     openModal(modal);
//   });
// });


// modalContainer.submitButton.addEventListener('click', async (e) => {
//   const commentName = document.querySelector('.comment-name');
//   const comment = document.querySelector('.comment');
//   const itemID = e.target.closest('.modal').getAttribute('dataset');
//   await api.postComments(itemID, commentName.value, comment.value);
//   const storedComments = await api.getComments(itemID);
//   loadComments(storedComments);
//   commentName.value = '';
//   comment.value = '';
// });
