// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import getData from './foodapi.js';
import {getLikes, postLike} from './modules/likeapi.js'
EventListerners.buttonSubmit();
// import './style.css';



getData();
EventListerners.reserveBtn();
EventListerners.closeBtn();

postLike(52819)
postLike(53043);
postLike(52944);

getLikes(); 


//call the view in the main page
window.onload = () => {
  let likeBtn;
  setTimeout(() => {
    likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((element) => {
      element.addEventListener("click", () => {
        postLike(element.getAttribute("data-index"));
        setTimeout(() => {
          console.log(getLikes());
        }, "1000")
        
      });
    });
  }, "1000")
};


