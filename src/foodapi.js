
const container = document.getElementById('product');
const Title = document.getElementById('coutItem');
console.log(Title)
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
                    <button class="button comment-button" id="com${index}">Comment</button>
                    <button class="button reservation-button" id="${index}">Reservation</button>
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
        Title.textContent = 'Discover our rich menu with '+ res.meals.length+' plats';        
      });
}

//export default getData;
export {
    getData,
    countItem,
  };