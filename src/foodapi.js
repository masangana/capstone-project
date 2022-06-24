/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const container = document.getElementById('product');
const Title = document.getElementById('coutItem');
const deliciousMeals = document.querySelector('#navlist .delicious-meals');

const image = new Image();
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';

const getData = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      res.meals.forEach((element, index) => {
        image.src = element.strMealThumb;

        container.innerHTML += `
            <div class="pro">
            <img src="${image.src}" alt="" srcset="">
            <div class="des">
                <h5>${element.strMeal}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <span data-index="${element.idMeal}" class="likeNumber">0</span>
                    </div>
                <div class="button-cont">
                    <button data-index="${element.idMeal}" class="button comment-button" id="com${element.idMeal}">Comment</button>
                    <button data-index="${element.idMeal}" class="button reservation-button" id="${element.idMeal}">Reservation</button>
                </div>
            </div>
            <button data-index="${element.idMeal}" class="like monlien" id="${index}"><i class="fas fa-thumbs-up"></i></button>
            </div>`;
      });
    });
};

const countItem = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      Title.textContent = `Discover our rich menu with ${res.meals.length} plates`,
      deliciousMeals.textContent = `Delicious Meals (${res.meals.length})`;
    });
};

// export default getData;
export {
  getData,
  countItem,
};
