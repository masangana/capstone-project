/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://capstone-project/./src/style.scss?");

/***/ }),

/***/ "./src/foodapi.js":
/*!************************!*\
  !*** ./src/foodapi.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countItem\": () => (/* binding */ countItem),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst container = document.getElementById('product');\r\nconst Title = document.getElementById('coutItem');\r\nconst image = new Image();\r\nconst url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';\r\n\r\nconst getData = async () => {\r\n  await fetch(url)\r\n    .then((res) => res.json())\r\n    .then((res) => {\r\n      res.meals.forEach((element, index) => {\r\n        image.src = element.strMealThumb;\r\n\r\n        container.innerHTML += `\r\n            <div class=\"pro\">\r\n            <img src=\"${image.src}\" alt=\"\" srcset=\"\">\r\n            <div class=\"des\">\r\n                <h5>${element.strMeal}</h5>\r\n                <div class=\"star\">\r\n                    <i class=\"fas fa-star\"></i>\r\n                    <span data-index=\"${element.idMeal}\" class=\"likeNumber\">0</span>\r\n                    </div>\r\n                <div class=\"button-cont\">\r\n                    <button data-index=\"${element.idMeal}\" class=\"button comment-button\" id=\"com${element.idMeal}\">Comment</button>\r\n                    <button data-index=\"${element.idMeal}\" class=\"button reservation-button\" id=\"${element.idMeal}\">Reservation</button>\r\n                </div>\r\n            </div>\r\n            <button data-index=\"${element.idMeal}\" class=\"like monlien\" id=\"${index}\"><i class=\"fas fa-thumbs-up\"></i></button>\r\n            </div>`;\r\n      });\r\n    });\r\n};\r\n\r\nconst countItem = async () => {\r\n  await fetch(url)\r\n    .then((res) => res.json())\r\n    .then((res) => {\r\n      Title.textContent = `Discover our rich menu with ${res.meals.length} plates`;\r\n    });\r\n};\r\n\r\n// export default getData;\r\n\r\n\n\n//# sourceURL=webpack://capstone-project/./src/foodapi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _foodapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodapi.js */ \"./src/foodapi.js\");\n/* harmony import */ var _modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likeapi.js */ \"./src/modules/likeapi.js\");\n/* harmony import */ var _modules_MicroverseAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/MicroverseAPI */ \"./src/modules/MicroverseAPI.js\");\n/* harmony import */ var _modules_CommentView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/CommentView */ \"./src/modules/CommentView.js\");\n/* harmony import */ var _modules_ReservationView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ReservationView */ \"./src/modules/ReservationView.js\");\n/* harmony import */ var _modules_Util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Util */ \"./src/modules/Util.js\");\n/* eslint-disable consistent-return */\r\n// eslint-disable-next-line no-unused-vars\r\n/* eslint-disable import/extensions */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst modalView = new _modules_CommentView__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nconst modalContainer = modalView.createModal();\r\n\r\nconst reserve = new _modules_ReservationView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\nconst recont = reserve.createModal();\r\n\r\nconst api = new _modules_MicroverseAPI__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst util = new _modules_Util__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n\r\nconst overlay = document.createElement('div');\r\ndocument.body.appendChild(overlay);\r\noverlay.classList.add('overlay');\r\n\r\n(0,_foodapi_js__WEBPACK_IMPORTED_MODULE_1__.countItem)();\r\n(0,_foodapi_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n\r\n// call the view in the main page\r\nwindow.onload = () => {\r\n  // commet section code starts\r\n  const popupButton = document.querySelectorAll('.comment-button');\r\n  const reservationbtn = document.querySelectorAll('.reservation-button');\r\n  popupButton.forEach((pupup) => {\r\n    pupup.addEventListener('click', async (e) => {\r\n      const id = e.target.getAttribute('data-index');\r\n      const res = await api.getItemByID(id);\r\n      const modal = document.querySelector('.modal');\r\n      modal.setAttribute('dataset', `${id}`);\r\n      modalContainer.modalTitle.innerHTML = res.meals[0].strMeal;\r\n      modalContainer.modalClose.innerHTML = '&times;';\r\n      modalContainer.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);\r\n      modalContainer.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;\r\n      const storedComments = await api.getComments(id);\r\n      util.loadComments(storedComments, modalContainer);\r\n      util.openModal(modal, overlay);\r\n    });\r\n  });\r\n  modalContainer.modalClose.addEventListener('click', (e) => {\r\n    const modal = (e.target.closest('.modal'));\r\n    util.closeModal(modal, overlay);\r\n  });\r\n  overlay.addEventListener('click', () => {\r\n    const modals = document.querySelectorAll('.modal.active');\r\n    modals.forEach((modal) => {\r\n      util.closeModal(modal, overlay);\r\n    });\r\n  });\r\n\r\n  modalContainer.submitButton.addEventListener('click', async (e) => {\r\n    const commentName = document.querySelector('.comment-name');\r\n    const comment = document.querySelector('.comment');\r\n    const itemID = e.target.closest('.modal').getAttribute('dataset');\r\n    if (commentName.value === '' || comment.value === '') {\r\n      return;\r\n    }\r\n    api.postComments(itemID, commentName.value, comment.value)\r\n      .then(() => api.getComments(itemID))\r\n      .then((storedComments) => {\r\n        util.loadComments(storedComments, modalContainer);\r\n        commentName.value = '';\r\n        comment.value = '';\r\n      });\r\n  });\r\n\r\n  // comment section code ends\r\n  // reserve start\r\n  reservationbtn.forEach((pupup) => {\r\n    pupup.addEventListener('click', async (e) => {\r\n      const id = e.target.getAttribute('data-index');\r\n      const res = await api.getItemByID(id);\r\n      const modal = document.querySelector('.remodal');\r\n      modal.setAttribute('dataset', `${id}`);\r\n      recont.modalTitle.innerHTML = res.meals[0].strMeal;\r\n      recont.modalClose.innerHTML = '&times;';\r\n      recont.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);\r\n      recont.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;\r\n      const storedReserve = await api.getReserve(id);\r\n      util.loadReservations(storedReserve, recont);\r\n      util.openModal(modal, overlay);\r\n    });\r\n  });\r\n\r\n  recont.submitButton.addEventListener('click', async (e) => {\r\n    const commentName = document.querySelector('.recomment-name');\r\n    const startDate = document.querySelector('.start-date');\r\n    const endDate = document.querySelector('.end-date');\r\n    const itemID = e.target.closest('.remodal').getAttribute('dataset');\r\n    if (commentName.value === '' || startDate.value === '' || endDate.value === '') {\r\n      return;\r\n    }\r\n    api.postreservations(itemID, commentName.value, startDate.value, endDate.value)\r\n      .then(() => api.getReserve(itemID))\r\n      .then((storedComments) => {\r\n        util.loadReservations(storedComments, recont);\r\n        commentName.value = '';\r\n        startDate.value = '';\r\n        endDate.value = '';\r\n      });\r\n  });\r\n  recont.modalClose.addEventListener('click', (e) => {\r\n    const modal = (e.target.closest('.remodal'));\r\n    util.closeModal(modal, overlay);\r\n  });\r\n  overlay.addEventListener('click', () => {\r\n    const modals = document.querySelectorAll('.remodal.active');\r\n    modals.forEach((modal) => {\r\n      util.closeModal(modal, overlay);\r\n    });\r\n  });\r\n\r\n  // reserve end\r\n  // show the like\r\n  const likeNumber = document.querySelectorAll('.likeNumber');\r\n  likeNumber.forEach((element) => {\r\n    element.textContent = '0';\r\n    const vuelike = async () => {\r\n      const result = await (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n      result.forEach((el) => {\r\n        const exists = Object.values(el).includes(element.getAttribute('data-index'));\r\n        if (exists) {\r\n          element.textContent = el.likes;\r\n          return el.likes;\r\n        }\r\n      });\r\n    };\r\n    vuelike();\r\n  });\r\n  // like button setup for action\r\n  const likeBtn = document.querySelectorAll('.like');\r\n  likeBtn.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      //\r\n      likeNumber.forEach((Number) => {\r\n        const vuelikeUpdate = async () => {\r\n          const result = await (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n          result.forEach((el) => {\r\n            const exists = Object.values(el).includes(Number.getAttribute('data-index'));\r\n            if (exists) {\r\n              Number.textContent = el.likes;\r\n              return el.likes;\r\n            }\r\n          });\r\n        };\r\n        vuelikeUpdate();\r\n      });\r\n      (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(btn.getAttribute('data-index'));\r\n    });\r\n  });\r\n};\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/CommentView.js":
/*!************************************!*\
  !*** ./src/modules/CommentView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CommentView {\r\n   createModal = () => {\r\n     const modal = document.createElement('div');\r\n     const modalHeader = document.createElement('div');\r\n     const modalBody = document.createElement('div');\r\n     const modalTitle = document.createElement('h3');\r\n     const modalClose = document.createElement('button');\r\n     const itemImg = document.createElement('img');\r\n     const itemDescription = document.createElement('p');\r\n     const ingredients = document.createElement('ul');\r\n     const commentForm = document.createElement('form');\r\n     const name = document.createElement('input');\r\n     const comment = document.createElement('textarea');\r\n     const submitButton = document.createElement('button');\r\n     const commentDiv = document.createElement('div');\r\n     const commentHeader = document.createElement('h3');\r\n     const formHeader = document.createElement('h3');\r\n     modal.classList.add('modal');\r\n     modalHeader.classList.add('modal-header');\r\n     modalTitle.classList.add('title');\r\n     modalClose.classList.add('close-button');\r\n     modalBody.classList.add('modal-body');\r\n     name.classList.add('comment-name');\r\n     comment.classList.add('comment');\r\n     commentDiv.classList.add('comment-container');\r\n     commentForm.classList.add('comment-form');\r\n\r\n     modal.setAttribute('id', 'modal');\r\n     itemImg.setAttribute('height', '100');\r\n     name.setAttribute('type', 'text');\r\n     name.setAttribute('placeholder', 'Your name');\r\n     comment.setAttribute('placeholder', 'Your insights');\r\n     submitButton.setAttribute('type', 'submit');\r\n     commentForm.setAttribute('onSubmit', 'return false');\r\n\r\n     submitButton.innerHTML = 'Submit';\r\n\r\n     document.body.appendChild(modal);\r\n     modal.appendChild(modalHeader);\r\n     modal.appendChild(modalBody);\r\n     modalHeader.appendChild(modalTitle);\r\n     modalHeader.appendChild(modalClose);\r\n     modalBody.appendChild(ingredients);\r\n     modalBody.appendChild(itemImg);\r\n     modalBody.appendChild(itemDescription);\r\n     modalBody.appendChild(commentDiv);\r\n     modalBody.appendChild(commentForm);\r\n     commentForm.appendChild(formHeader);\r\n     commentForm.appendChild(name);\r\n     commentForm.appendChild(comment);\r\n     commentForm.appendChild(submitButton);\r\n\r\n     formHeader.innerHTML = 'Add a Comment';\r\n     return {\r\n       modal,\r\n       modalHeader,\r\n       commentDiv,\r\n       commentHeader,\r\n       modalClose,\r\n       itemImg,\r\n       itemDescription,\r\n       submitButton,\r\n       modalTitle,\r\n     };\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentView);\n\n//# sourceURL=webpack://capstone-project/./src/modules/CommentView.js?");

/***/ }),

/***/ "./src/modules/MicroverseAPI.js":
/*!**************************************!*\
  !*** ./src/modules/MicroverseAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchRequestClass)\n/* harmony export */ });\nclass FetchRequestClass {\r\n    method;\r\n\r\n      body;\r\n\r\n      headers;\r\n\r\n      url;\r\n\r\n      constructor({\r\n        method = 'GET',\r\n        body, url = '',\r\n        headers = { 'Content-type': 'application/json; charset=UTF-8' },\r\n      } = {}) {\r\n        this.method = method;\r\n        this.body = body;\r\n        this.headers = headers;\r\n        this.url = url;\r\n      }\r\n\r\n      async makeRequest() {\r\n        try {\r\n          const options = {\r\n            method: this.method,\r\n            body: JSON.stringify(this.body),\r\n            headers: this.method === 'POST' ? this.headers : undefined,\r\n          };\r\n\r\n          const reponse = await fetch(this.url, options);\r\n          if (reponse.status === 201) return null;\r\n          const data = await reponse.json();\r\n          return data;\r\n        } catch (error) {\r\n          throw new Error(error);\r\n        }\r\n      }\r\n\r\n      getItemByID = async (id) => {\r\n        const item = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)\r\n          .then((response) => response.json());\r\n        return item;\r\n      }\r\n\r\n      getComments = async (id) => {\r\n        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments?item_id=${id}`);\r\n        const data = await comments.json();\r\n        return data;\r\n      }\r\n\r\n      postComments = async (itemID, name, comment) => {\r\n        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments', {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify({\r\n            item_id: itemID,\r\n            username: name,\r\n            comment,\r\n          }),\r\n        });\r\n        return xxx;\r\n      }\r\n\r\n      getReserve = async (id) => {\r\n        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=${id}`);\r\n        const data = await comments.json();\r\n        return data;\r\n      }\r\n\r\n      postreservations = async (itemID, name, startDate, endDate) => {\r\n        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations', {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify({\r\n            item_id: itemID,\r\n            username: name,\r\n            date_start: startDate,\r\n            date_end: endDate,\r\n          }),\r\n        });\r\n        return xxx;\r\n      }\r\n}\n\n//# sourceURL=webpack://capstone-project/./src/modules/MicroverseAPI.js?");

/***/ }),

/***/ "./src/modules/ReservationView.js":
/*!****************************************!*\
  !*** ./src/modules/ReservationView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ReservationView {\r\n  createModal = () => {\r\n    const modal = document.createElement('div');\r\n    const modalHeader = document.createElement('div');\r\n    const modalBody = document.createElement('div');\r\n    const modalTitle = document.createElement('h3');\r\n    const modalClose = document.createElement('button');\r\n    const itemImg = document.createElement('img');\r\n    const itemDescription = document.createElement('p');\r\n    const ingredients = document.createElement('ul');\r\n    const commentForm = document.createElement('form');\r\n    const name = document.createElement('input');\r\n    const startDate = document.createElement('input');\r\n    const endDate = document.createElement('input');\r\n    const submitButton = document.createElement('button');\r\n    const commentDiv = document.createElement('div');\r\n    const commentHeader = document.createElement('h3');\r\n    const formHeader = document.createElement('h3');\r\n    modal.classList.add('remodal');\r\n    modalHeader.classList.add('remodal-header');\r\n    modalTitle.classList.add('retitle');\r\n    modalClose.classList.add('reclose-button');\r\n    modalBody.classList.add('remodal-body');\r\n    name.classList.add('recomment-name');\r\n    startDate.classList.add('start-date');\r\n    endDate.classList.add('end-date');\r\n    startDate.setAttribute('type', 'date');\r\n    endDate.setAttribute('type', 'date');\r\n    commentDiv.classList.add('recomment-container');\r\n    commentForm.classList.add('recomment-form');\r\n\r\n    modal.setAttribute('id', 'modal');\r\n    itemImg.setAttribute('height', '100');\r\n    name.setAttribute('type', 'text');\r\n    name.setAttribute('placeholder', 'Your name');\r\n    startDate.setAttribute('placeholder', 'Start Date');\r\n    endDate.setAttribute('placeholder', 'End Date');\r\n    submitButton.setAttribute('type', 'submit');\r\n    commentForm.setAttribute('onSubmit', 'return false');\r\n\r\n    submitButton.innerHTML = 'Submit';\r\n    endDate.required = true;\r\n    startDate.required = true;\r\n\r\n    document.body.appendChild(modal);\r\n    modal.appendChild(modalHeader);\r\n    modal.appendChild(modalBody);\r\n    modalHeader.appendChild(modalTitle);\r\n    modalHeader.appendChild(modalClose);\r\n    modalBody.appendChild(ingredients);\r\n    modalBody.appendChild(itemImg);\r\n    modalBody.appendChild(itemDescription);\r\n    modalBody.appendChild(commentDiv);\r\n    modalBody.appendChild(commentForm);\r\n    commentForm.appendChild(formHeader);\r\n    commentForm.appendChild(name);\r\n    commentForm.appendChild(startDate);\r\n    commentForm.appendChild(endDate);\r\n    commentForm.appendChild(submitButton);\r\n\r\n    formHeader.innerHTML = 'Add a Reservation';\r\n    return {\r\n      modal,\r\n      modalHeader,\r\n      commentDiv,\r\n      commentHeader,\r\n      modalClose,\r\n      itemImg,\r\n      itemDescription,\r\n      submitButton,\r\n      modalTitle,\r\n    };\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationView);\n\n//# sourceURL=webpack://capstone-project/./src/modules/ReservationView.js?");

/***/ }),

/***/ "./src/modules/Util.js":
/*!*****************************!*\
  !*** ./src/modules/Util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Util)\n/* harmony export */ });\nclass Util {\r\n   openModal = (modal, overlay) => {\r\n     if (modal == null) return;\r\n     modal.classList.add('active');\r\n     overlay.classList.add('active');\r\n   }\r\n\r\n   closeModal = (modal, overlay) => {\r\n     if (modal == null) return;\r\n     modal.classList.remove('active');\r\n     overlay.classList.remove('active');\r\n   }\r\n\r\n   commentCounter = (comments) => {\r\n     let count = 0;\r\n     comments.forEach(() => {\r\n       count += 1;\r\n     });\r\n     return count;\r\n   }\r\n\r\n   reserveCounter = (comments) => {\r\n     let count = 0;\r\n     comments.forEach(() => {\r\n       count += 1;\r\n     });\r\n     return count;\r\n   }\r\n\r\n   loadReservations = (storedReserve, modalContainer) => {\r\n     modalContainer.commentDiv.innerHTML = '';\r\n     let numResve;\r\n     if (storedReserve.error) {\r\n       numResve = '';\r\n     } else {\r\n       numResve = this.reserveCounter(storedReserve);\r\n     }\r\n     modalContainer.commentHeader.innerHTML = `Resevations(${numResve})`;\r\n     modalContainer.commentDiv.appendChild(modalContainer.commentHeader);\r\n     if (storedReserve.error) {\r\n       return;\r\n     }\r\n     storedReserve.forEach((item) => {\r\n       const commentParagraph = document.createElement('p');\r\n       commentParagraph.innerHTML = `${item.date_start} <span class='comment-username'> ${item.date_end}:</span>   ${item.username}`;\r\n       modalContainer.commentDiv.appendChild(commentParagraph);\r\n     });\r\n   }\r\n\r\n   loadComments = (storedComments, modalContainer) => {\r\n     modalContainer.commentDiv.innerHTML = '';\r\n     let numComments;\r\n     if (storedComments.error) {\r\n       numComments = '';\r\n     } else {\r\n       numComments = this.commentCounter(storedComments);\r\n     }\r\n\r\n     modalContainer.commentHeader.innerHTML = `Comments(${numComments})`;\r\n     modalContainer.commentDiv.appendChild(modalContainer.commentHeader);\r\n     if (storedComments.error) {\r\n       return;\r\n     }\r\n     storedComments.forEach((item) => {\r\n       const commentParagraph = document.createElement('p');\r\n       commentParagraph.innerHTML = `${item.creation_date} <span class='comment-username'> ${item.username}:</span>   ${item.comment}`;\r\n       modalContainer.commentDiv.appendChild(commentParagraph);\r\n     });\r\n   }\r\n}\n\n//# sourceURL=webpack://capstone-project/./src/modules/Util.js?");

/***/ }),

/***/ "./src/modules/likeapi.js":
/*!********************************!*\
  !*** ./src/modules/likeapi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCom\": () => (/* binding */ getCom),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst appID = 'ed0LORUs5gJKQQ4QLOxZ';\r\n\r\nconst postLike = async (itemID) => {\r\n  const response = await fetch(`${url}${appID}/likes`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: itemID }),\r\n  });\r\n  const post = await response.text();\r\n  return post;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${url}${appID}/likes`);\r\n  const likes = await response.json();\r\n  return likes;\r\n};\r\n\r\nconst getCom = async (idIem) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=${idIem}`);\r\n  const likes = await response.json();\r\n  return likes;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likeapi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;