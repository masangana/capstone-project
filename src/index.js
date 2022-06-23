// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import AddReservation from './modules/AddReservation';
import {getData, countItem} from './foodapi.js';
import {getLikes, postLike, getCom} from './modules/likeapi.js'
import openPopup from './modules/displayModal.js'
import ReservationClass from './modules/ReservationClass.js';

// import { specialID } from './modules/AddReservation'
// const individualAPI = EventListerners.fetchIt()
// export { individualAPI }
countItem()
getData();



// const IDnum = () =>   {
//     window.addEventListener('load', () => {
//        setTimeout(function() {
//        const allOF = document.querySelectorAll('.reservation-button')
//        allOF.forEach((button) => {
//         console.log(button.getAttribute('id'))
//        })
//    }, 500)
//     })
//    }

//    IDnum()

//call the view in the main page
window.onload = () => {
  let likeBtn;
  let likeNumber;
  setTimeout(() => {

    let commentbutton = document.querySelectorAll('.comment-button')


    //create reservation
    let reservationbtn = document.querySelectorAll('.reservation-button')
    //console.log(reservationbtn)
    reservationbtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const vupopup = async () => {
          const vueComment = async () => {
            //UL.innerHTML = ''
            const result = await  getCom(btn.getAttribute("data-index"))
            console.log(result)
          };
          vueComment()
          openPopup(btn.getAttribute("data-index"));
          setTimeout(() => {
            let formSub = document.getElementById(btn.getAttribute("data-index"))
              //console.log(formSub)
              
              const UL = document.querySelector('.reservation-ul');
              formSub.addEventListener('submit', async (e) =>{
                const [username, dateStart, dateEnd] = Array.from(formSub.elements);
                const user = username.value;
                const start = dateStart.value;
                const end = dateEnd.value;
                const idTem = btn.getAttribute("data-index")
                console.log(user, start, end, idTem)
                const ReservationClas = new ReservationClass(idTem, user, start, end)
                const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations/`;
                const creatNew = AddReservation.postData(ReservationClas, URL);
                username.value = '';
                dateStart.value = '';
                dateEnd.value = '';
                UL.innerHTML = ''

                setTimeout(function( ) {
                  //UL.innerHTML = ''
                  console.log(idTem)
                 // AddReservation.displayOnUI(idTem)
                }, 1000)

                const vueComment = async () => {
                  //UL.innerHTML = ''
                  const result = await  getCom(idTem)
                  console.log(result)
                };
                vueComment()

                return creatNew;
                
              })

          }, 1000);
        };
        //console.log(btn.getAttribute("data-index"))
        vupopup()
      });
    })
//end reservation
//submit form
 
//end
//create submi btn



    let submitBtn = document.querySelectorAll('.sendBtn')
    console.log(submitBtn)
    submitBtn.forEach((subBtn)=>{
      //console.log(subBtn);
      subBtn.addEventListener("click", () => {
        
        const senData = async () => {
          console.log(subBtn.getAttribute("data-index"));
        };
        //console.log(btn.getAttribute("data-index"))
        senData()
      });
    })

//end

    //show the like
    likeNumber = document.querySelectorAll('.likeNumber');
    likeNumber.forEach((element) => {
      element.textContent ='0'
      const vuelike = async () => {
        const result = await getLikes()
        result.forEach((el) => {
          let exists = Object.values(el).includes(element.getAttribute("data-index") );
          if (exists) {
            return element.textContent = el.likes;  
          }
        })
      };
      vuelike()
    })
    //like button setup for action
    likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        
        //
        likeNumber.forEach((Number)=> {
          const vuelikeUpdate = async () => {
          const result = await getLikes()
          result.forEach((el) => {
            let exists = Object.values(el).includes(Number.getAttribute("data-index") );
            if (exists) {
              return Number.textContent = el.likes; 
            }
          })
        };
        vuelikeUpdate()
        
        })
        postLike(btn.getAttribute("data-index"));
      });
    });
  }, "1000")
};


EventListerners.buttonSubmit();
// specialID()
// load the basic info
//EventListerners.reserveBtn();
EventListerners.closeBtn();
AddReservation.getDataToUse();
EventListerners.windowLoad()
