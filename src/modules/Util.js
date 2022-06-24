export default class Util {
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

   loadComments = (storedComments, modalContainer) => {
     modalContainer.commentDiv.innerHTML = '';
     let numComments;
     if (storedComments.error) {
       numComments = '';
     } else {
       numComments = this.commentCounter(storedComments);
     }

     modalContainer.commentHeader.innerHTML = `Comments(${numComments})`;
     modalContainer.commentDiv.appendChild(modalContainer.commentHeader);
     if (storedComments.error) {
       return;
     }
     storedComments.forEach((item) => {
       const commentParagraph = document.createElement('p');
       commentParagraph.innerHTML = `${item.creation_date} <span class='comment-username'> ${item.username}:</span>   ${item.comment}`;
       modalContainer.commentDiv.appendChild(commentParagraph);
     });
   }
}