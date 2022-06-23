import { get } from 'lodash';
import {getLikes, postLike} from './modules/likeapi.js'

const container = document.getElementById('product');
const image = new Image();



const getit2 = async (id)=>{
    const likes = await getLikes()
    let filteredResult
     filteredResult = likes.find((e) => e.item_id == id);
     if(filteredResult === undefined){
        return `<span>0</span>`
     }else{
        return `<span>${filteredResult.likes}</span>`
     }
}

const getData = async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((res) => {
      res.meals.forEach((element, index) => {
        image.src = element.strMealThumb;
        const getit = async (id)=>{
            const likes = await getLikes()
            let filteredResult
             filteredResult = likes.find((e) => e.item_id == id);
             let likeNumber
             if (likeNumber !== undefined) {
                likeNumber = filteredResult.likes
             }else{
                likeNumber = filteredResult.likes
             }
            
             //return filteredResult.likes
        }
        container.innerHTML += `
            <div class="pro">
            <img src="${image.src}" alt="" srcset="">
            <div class="des">
                <h5>${element.strMeal}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <span data-index="${element.idMeal}" class="likeNumber">${element.idMeal}</span>
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

export default getData;
