

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const container = document.querySelector('.modalcon')

const openPopup = async (index) => {
    
    await fetch(url+`${index}`)
    .then((res) => res.json())
    .then((res) => {
      const useThis = res.meals
      //console.log(useThis[0].idMeal)

      container.innerHTML +=`
      <h3 class="instruction-reserve-h3"><span class"instruction-span">Alex ${useThis[0].strMeal} is as follows:<br> <br></span> ${useThis[0].strInstructions}</h3>
      <img src="${useThis[0].strMealThumb}" class="theImage" alt="${useThis[0].strMeal}" >
      <h1 data-index="${useThis[0].idMeal}">${useThis[0].strMeal}</h1>

      <div class="reservation-ul">

      </div>

      <form action="" class="myForm" id="${useThis[0].idMeal}">
        <label for="yourName" class="label-it"> Your Name:
                <input type="text" id="yourName" class="reservation-name-input" placeholder="Your name" required>
            </label>
            <label for="startDate" class="label-it"> Start Date:
                <input type="date" id="startDate" class="reservation-startdate-input" placeholder="Start date" required>
            </label>
            <label for="endDate" class="label-it"> End Date:
                <input type="date" id="endDate" class="reservation-enddate-input" placeholder="End date" required>
            </label>
            <input  type="submit" class="make-submit">
        </form>`

       })

 };

export default openPopup;