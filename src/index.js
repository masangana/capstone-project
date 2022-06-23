// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
//import getData from './foodapi.js';
import {getLikes, postLike} from './modules/likeapi.js'
EventListerners.buttonSubmit();
// import './style.css';

// load the basic info

//get info test

const container = document.getElementById('product');
const image = new Image();
const getData = async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((res) => {
      res.meals.forEach((element, index) => {
        image.src = element.strMealThumb;
        // const getit = async (id)=>{
        //     const likes = await getLikes()
        //     let filteredResult
        //      filteredResult = likes.find((e) => e.item_id == id);
        //      let likeNumber
        //      if (likeNumber !== undefined) {
        //         likeNumber = filteredResult.likes
        //      }else{
        //         likeNumber = filteredResult.likes
        //      }
            
        //      //return filteredResult.likes
        // }
        container.innerHTML += `
            <div class="pro">
            <img src="${image.src}" alt="" srcset="">
            <div class="des">
                <h5>${element.strMeal}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <span>${element.idMeal}</span>
                    </div>
                <div class="button-cont">
                    <button class="button comment-button" id="com${index}">Comment</button>
                    <button class="button reservation-button" id="${index}">Reservation</button>
                </div>
            </div>
               
                <button data-index="${element.idMeal}" class="like monlien" id="${index}"><i class="fas fa-thumbs-up"></i></button>
            </div>`;
        //getit2(element.idMeal)
      });
    });
};

//end
getData();
EventListerners.reserveBtn();
EventListerners.closeBtn();

postLike(52819)
postLike(53043);
postLike(52944);

getLikes(); 

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




const likeBtn = document.querySelectorAll('.pro');
console.log(likeBtn)



