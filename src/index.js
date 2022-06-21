// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import "./style.scss";
import images from './assets/images/plat.jpg';
import getData from "./foodapi.js";
//import './style.css';

const container = document.getElementById('product');
const image = new Image();
image.src = images;

// Get Data from API
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(res => res.json())
.then(res => {
    console.log(res.meals)
    res.meals.forEach((element, index) => {
        container.innerHTML += `
        <div class="pro">
        <img src="${image.src}" alt="" srcset="">
        <div class="des">
            <h5>${element.strMeal}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <span>41</span>
            </div>
            <div class="button-cont">
                <button class="button" id="com${index}">Comment</button>
                <button class="button" id="res${index}">Reservation</button>
            </div>
        </div>
            <a href="#" target="_blank" rel="noopener noreferrer" class="fas fa-thumbs-up" id="like"></a>
        </div>`
        //console.log(index)
    });
})






// for (let index = 0; index < 12; index++) {
//     container.innerHTML += `
//     <div class="pro">
//     <img src="${image.src}" alt="" srcset="">
//     <div class="des">
//         <h5>Food Name</h5>
//         <div class="star">
//             <i class="fas fa-star"></i>
//             <span>41</span>
//         </div>
//         <div class="button-cont">
//             <button class="button">Comment</button>
//             <button class="button">Reservation</button>
//         </div>
//     </div>
//     <a href="#" target="_blank" rel="noopener noreferrer" class="fas fa-thumbs-up" id="like"></a>
// </div>`
    
// }