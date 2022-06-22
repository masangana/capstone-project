import AddReservation from './AddReservation.js';

export default class EventListerners {
    static buttonSubmit = () => {
      const formBtn = document.querySelector('.reservation-date-form');
      const mainBody = document.querySelector('.product');
      let theID;
      mainBody.addEventListener('click', (e) => {
        const tar = e.target;
        theID = tar.parentElement.parentElement.parentElement.children[1].children[2].children[1].getAttribute('id');
        return theID
      })

      formBtn.addEventListener('submit', async (e) => {
        try {
          e.preventDefault();
          // const itemId = e.target.parentElement
          const [username, dateStart, dateEnd] = Array.from(formBtn.elements);
          const creatNew = AddReservation.createDataToPostToAPI({
            item_id: theID,
            username: username.value,
            date_start: dateStart.value,
            date_end: dateEnd.value,
          });
          username.value = '';
          dateStart.value = '';
          dateEnd.value = '';
          return creatNew;
        } catch (error) {
          throw new Error(error);
        }
      });
    }

    static reserveBtn = () => {
      const mainBody = document.querySelector('.product');

      mainBody.addEventListener('click', (e) => {
        const tar = e.target;
        const parent = e.target.parentElement.parentElement.parentElement;
        const src = parent.children[0].getAttribute('src');
        const foodTag = parent.parentElement.parentElement;
        const pickName = parent.children[1].children[0].textContent;
        const underSpace = document.querySelector('.under-space');
        const appendIt = document.querySelector('.image-body');
        const starNumber = parent.children[1].children[1].children[1].textContent;
        const underSpaceContent = `
            <h3>${pickName} has ${starNumber} stars</h3>
            `;
        const imageIt = `
            <img src="${src}" class="theImage" alt="${pickName}" >
            <h1>${pickName}</h1>
            `;
        const reservationBody = document.querySelector('.reservation-body');
        if (!tar.classList.contains('reservation-button')) return null;

        appendIt.innerHTML = imageIt;
        underSpace.innerHTML = underSpaceContent;
        foodTag.style.display = 'none';
        reservationBody.classList.add('active');
      });
    }

    static closeBtn = () => {
      const mainBody = document.querySelector('.reservation-body');
      const foodTag = document.querySelector('.product');

      mainBody.addEventListener('click', (e) => {
        const tar = e.target;
        if (!tar.classList.contains('closeBTN')) return null;

        foodTag.style.display = 'block';
        mainBody.classList.remove('active');
      });
    }
}