export default class UtilReservation {
    openModal = (modal, overlay) => {
      if (modal == null) return;
      modal.classList.add('active');
      overlay.classList.add('active');
    }
 
    closeModal = (modal, overlay) => {
      if (modal == null) return;
      modal.classList.remove('active');
      overlay.classList.remove('active');
    }
 
    commentCounter = (comments) => {
      let count = 0;
      comments.forEach(() => {
        count += 1;
      });
      return count;
    }
 
    loadData = (storedData, modalContainer) => {
      modalContainer.commentDiv.innerHTML = '';
      let numComments;
      if (storedData.error) {
        numComments = '';
      } else {
        numComments = this.commentCounter(storedData);
      }
 
      modalContainer.commentHeader.innerHTML = `Reservations (${numComments})`;
      modalContainer.commentDiv.appendChild(modalContainer.commentHeader);
      if (storedData.error) {
        return;
      }
      storedData.forEach((item) => {
        const reservationParagraph = document.createElement('p');
        reservationParagraph.innerHTML = `${item.date_start} - <span class='comment-username'>${item.date_end} by </span> ${item.username}`;
        modalContainer.commentDiv.appendChild(reservationParagraph);
      });
    }
 }