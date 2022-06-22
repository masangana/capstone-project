const container = document.getElementById('product');
const image = new Image();

const getData = async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
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
                <span>${element.idMeal}</span>
            </div>
            <div class="button-cont">
                <button class="button comment-button" id="com${index}">Comment</button>
                <button class="button reservation-button" id="${index}">Reservation</button>
            </div>
        </div>
            <a href="#" target="_blank" rel="noopener noreferrer" class="fas fa-thumbs-up like" id="like"></a>
        </div>`;
      });
    });
};

export default getData;
