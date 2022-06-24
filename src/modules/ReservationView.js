class ReservationView {
  createModal = () => {
    const modal = document.createElement('div');
    const modalHeader = document.createElement('modal-header');
    const modalBody = document.createElement('div');
    const modalTitle = document.createElement('h3');
    const modalClose = document.createElement('button');
    const itemImg = document.createElement('img');
    const itemDescription = document.createElement('p');
    const ingredients = document.createElement('ul');
    const commentForm = document.createElement('form');
    const name = document.createElement('input');
    const startDate = document.createElement('input');
    const endDate = document.createElement('input');
    const submitButton = document.createElement('button');
    const commentDiv = document.createElement('div');
    const commentHeader = document.createElement('h3');
    const formHeader = document.createElement('h3');
    modal.classList.add('modal');
    modalHeader.classList.add('modal-header');
    modalTitle.classList.add('title');
    modalClose.classList.add('close-button');
    modalBody.classList.add('modal-body');
    name.classList.add('comment-name');
    // comment.classList.add('comment');
    startDate.setAttribute('type', 'date');
    endDate.setAttribute('type', 'date');
    commentDiv.classList.add('comment-container');
    commentForm.classList.add('comment-form');

    modal.setAttribute('id', 'modal');
    itemImg.setAttribute('height', '100');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Your name');
    startDate.setAttribute('placeholder', 'Start Date');
    endDate.setAttribute('placeholder', 'End Date');
    submitButton.setAttribute('type', 'submit');
    commentForm.setAttribute('onSubmit', 'return false');

    submitButton.innerHTML = 'Submit';
    endDate.required = true;
    startDate.required = true;

    document.body.appendChild(modal);
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalClose);
    modalBody.appendChild(ingredients);
    modalBody.appendChild(itemImg);
    modalBody.appendChild(itemDescription);
    modalBody.appendChild(commentDiv);
    modalBody.appendChild(commentForm);
    commentForm.appendChild(formHeader);
    commentForm.appendChild(name);
    commentForm.appendChild(startDate);
    commentForm.appendChild(endDate);
    commentForm.appendChild(submitButton);

    formHeader.innerHTML = 'Add a Reservation';
    return {
      modal,
      modalHeader,
      commentDiv,
      commentHeader,
      modalClose,
      itemImg,
      itemDescription,
      submitButton,
      modalTitle,
    };
  }
}

export default ReservationView;