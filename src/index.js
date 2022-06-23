// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import AddReservation from './modules/AddReservation';
import {getData, countItem} from './foodapi.js';
import {getLikes, postLike} from './modules/likeapi.js'

// import { specialID } from './modules/AddReservation'
// const individualAPI = EventListerners.fetchIt()
// export { individualAPI }
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

//call the view in the main page
window.onload = () => {
  let likeBtn;
  let likeNumber;
  setTimeout(() => {

    let commentbutton = document.querySelectorAll('.comment-button')

    //show the like
    likeNumber = document.querySelectorAll('.likeNumber');
    likeNumber.forEach((element) => {
      element.textContent ='0'
      const vuelike = async () => {
        const result = await getLikes()
        result.forEach((el) => {
          let exists = Object.values(el).includes(element.getAttribute("data-index") );
          if (exists) {
            return element.textContent = el.likes;  
          }
        })
      };
      vuelike()
    })
    //like button setup for action
    likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        
        //
        likeNumber.forEach((Number)=> {
          const vuelikeUpdate = async () => {
          const result = await getLikes()
          result.forEach((el) => {
            let exists = Object.values(el).includes(Number.getAttribute("data-index") );
            if (exists) {
              return Number.textContent = el.likes; 
            }
          })
        };
        vuelikeUpdate()
        
        })
        postLike(btn.getAttribute("data-index"));
      });
    });
  }, "1000")
};


EventListerners.buttonSubmit();
// specialID()
// load the basic info
EventListerners.reserveBtn();
EventListerners.closeBtn();
AddReservation.getDataToUse();
EventListerners.windowLoad()
