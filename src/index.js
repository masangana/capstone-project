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


console.log(getLikes())

//call the view in the main page
window.onload = () => {
  let likeBtn;
  let likeNumber;
  setTimeout(() => {
    
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
    likeBtn.forEach((element) => {
      element.addEventListener("click", () => {
        postLike(element.getAttribute("data-index"));
        getData();
        setTimeout(() => {
           
        }, "1000")
        
      });
    });
  }, "1000")
};


getLikes(); 