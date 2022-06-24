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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countItem\": () => (/* binding */ countItem),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* eslint-disable no-sequences */\n/* eslint-disable no-unused-expressions */\nconst container = document.getElementById('product');\nconst Title = document.getElementById('coutItem');\nconst deliciousMeals = document.querySelector('#navlist .delicious-meals');\n\nconst image = new Image();\nconst url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';\n\nconst getData = async () => {\n  await fetch(url)\n    .then((res) => res.json())\n    .then((res) => {\n      res.meals.forEach((element, index) => {\n        image.src = element.strMealThumb;\n\n        container.innerHTML += `\n            <div class=\"pro\">\n            <img src=\"${image.src}\" alt=\"\" srcset=\"\">\n            <div class=\"des\">\n                <h5>${element.strMeal}</h5>\n                <div class=\"star\">\n                    <i class=\"fas fa-star\"></i>\n                    <span data-index=\"${element.idMeal}\" class=\"likeNumber\">0</span>\n                    </div>\n                <div class=\"button-cont\">\n                    <button data-index=\"${element.idMeal}\" class=\"button comment-button\" id=\"com${element.idMeal}\">Comment</button>\n                    <button data-index=\"${element.idMeal}\" class=\"button reservation-button\" id=\"${element.idMeal}\">Reservation</button>\n                </div>\n            </div>\n            <button data-index=\"${element.idMeal}\" class=\"like monlien\" id=\"${index}\"><i class=\"fas fa-thumbs-up\"></i></button>\n            </div>`;\n      });\n    });\n};\n\nconst countItem = async () => {\n  await fetch(url)\n    .then((res) => res.json())\n    .then((res) => {\n      Title.textContent = `Discover our rich menu with ${res.meals.length} plates`,\n      deliciousMeals.textContent = `Delicious Meals (${res.meals.length})`;\n    });\n};\n\n// export default getData;\n\n\n\n//# sourceURL=webpack://capstone-project/./src/foodapi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _foodapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodapi.js */ \"./src/foodapi.js\");\n/* harmony import */ var _modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likeapi.js */ \"./src/modules/likeapi.js\");\n/* harmony import */ var _modules_MicroverseAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/MicroverseAPI */ \"./src/modules/MicroverseAPI.js\");\n/* harmony import */ var _modules_CommentView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/CommentView */ \"./src/modules/CommentView.js\");\n/* harmony import */ var _modules_ReservationView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ReservationView */ \"./src/modules/ReservationView.js\");\n/* harmony import */ var _modules_Util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Util */ \"./src/modules/Util.js\");\n/* eslint-disable no-unused-expressions */\n/* eslint-disable consistent-return */\n// eslint-disable-next-line no-unused-vars\n/* eslint-disable import/extensions */\n\n\n\n\n\n\n\n\nconst modalView = new _modules_CommentView__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nconst modalContainer = modalView.createModal();\n\nconst reserve = new _modules_ReservationView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nconst recont = reserve.createModal();\n\nconst api = new _modules_MicroverseAPI__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst util = new _modules_Util__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\nconst overlay = document.createElement('div');\ndocument.body.appendChild(overlay);\noverlay.classList.add('overlay');\n\n// call the view in the main page\nwindow.onload = async () => {\n  const count = await (0,_foodapi_js__WEBPACK_IMPORTED_MODULE_1__.countItem)();\n  count;\n  const data = await (0,_foodapi_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\n  data;\n\n  // commet section code starts\n  const popupButton = document.querySelectorAll('.comment-button');\n  const reservationbtn = document.querySelectorAll('.reservation-button');\n  popupButton.forEach((pupup) => {\n    pupup.addEventListener('click', async (e) => {\n      const id = e.target.getAttribute('data-index');\n      const res = await api.getItemByID(id);\n      const modal = document.querySelector('.modal');\n      modal.setAttribute('dataset', `${id}`);\n      modalContainer.modalTitle.innerHTML = res.meals[0].strMeal;\n      modalContainer.modalClose.innerHTML = '&times;';\n      modalContainer.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);\n      modalContainer.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;\n      const storedComments = await api.getComments(id);\n      util.loadComments(storedComments, modalContainer);\n      util.openModal(modal, overlay);\n    });\n  });\n  modalContainer.modalClose.addEventListener('click', (e) => {\n    const modal = (e.target.closest('.modal'));\n    util.closeModal(modal, overlay);\n  });\n  overlay.addEventListener('click', () => {\n    const modals = document.querySelectorAll('.modal.active');\n    modals.forEach((modal) => {\n      util.closeModal(modal, overlay);\n    });\n  });\n\n  modalContainer.submitButton.addEventListener('click', async (e) => {\n    const commentName = document.querySelector('.comment-name');\n    const comment = document.querySelector('.comment');\n    const itemID = e.target.closest('.modal').getAttribute('dataset');\n    if (commentName.value === '' || comment.value === '') {\n      return;\n    }\n    api.postComments(itemID, commentName.value, comment.value)\n      .then(() => api.getComments(itemID))\n      .then((storedComments) => {\n        util.loadComments(storedComments, modalContainer);\n        commentName.value = '';\n        comment.value = '';\n      });\n  });\n\n  // comment section code ends\n  // reserve start\n  reservationbtn.forEach((pupup) => {\n    pupup.addEventListener('click', async (e) => {\n      const id = e.target.getAttribute('data-index');\n      const res = await api.getItemByID(id);\n      const modal = document.querySelector('.remodal');\n      modal.setAttribute('dataset', `${id}`);\n      recont.modalTitle.innerHTML = res.meals[0].strMeal;\n      recont.modalClose.innerHTML = '&times;';\n      recont.itemImg.setAttribute('src', `${res.meals[0].strMealThumb}`);\n      recont.itemDescription.innerHTML = `${res.meals[0].strInstructions}`;\n      const storedReserve = await api.getReserve(id);\n      util.loadReservations(storedReserve, recont);\n      util.openModal(modal, overlay);\n    });\n  });\n\n  recont.submitButton.addEventListener('click', async (e) => {\n    const commentName = document.querySelector('.recomment-name');\n    const startDate = document.querySelector('.start-date');\n    const endDate = document.querySelector('.end-date');\n    const itemID = e.target.closest('.remodal').getAttribute('dataset');\n    if (commentName.value === '' || startDate.value === '' || endDate.value === '') {\n      return;\n    }\n    api.postreservations(itemID, commentName.value, startDate.value, endDate.value)\n      .then(() => api.getReserve(itemID))\n      .then((storedComments) => {\n        util.loadReservations(storedComments, recont);\n        commentName.value = '';\n        startDate.value = '';\n        endDate.value = '';\n      });\n  });\n  recont.modalClose.addEventListener('click', (e) => {\n    const modal = (e.target.closest('.remodal'));\n    util.closeModal(modal, overlay);\n  });\n  overlay.addEventListener('click', () => {\n    const modals = document.querySelectorAll('.remodal.active');\n    modals.forEach((modal) => {\n      util.closeModal(modal, overlay);\n    });\n  });\n\n  // reserve end\n  // show the like\n  const likeNumber = document.querySelectorAll('.likeNumber');\n  likeNumber.forEach((element) => {\n    element.textContent = '0';\n    const vuelike = async () => {\n      const result = await (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n      result.forEach((el) => {\n        const exists = Object.values(el).includes(element.getAttribute('data-index'));\n        if (exists) {\n          element.textContent = el.likes;\n          return el.likes;\n        }\n      });\n    };\n    vuelike();\n  });\n  // like button setup for action\n  const likeBtn = document.querySelectorAll('.like');\n  likeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      //\n      likeNumber.forEach((Number) => {\n        const vuelikeUpdate = async () => {\n          const result = await (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n          result.forEach((el) => {\n            const exists = Object.values(el).includes(Number.getAttribute('data-index'));\n            if (exists) {\n              Number.textContent = el.likes;\n              return el.likes;\n            }\n          });\n        };\n        vuelikeUpdate();\n      });\n      (0,_modules_likeapi_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(btn.getAttribute('data-index'));\n    });\n  });\n};\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/CommentView.js":
/*!************************************!*\
  !*** ./src/modules/CommentView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CommentView {\n   createModal = () => {\n     const modal = document.createElement('div');\n     const modalHeader = document.createElement('div');\n     const modalBody = document.createElement('div');\n     const modalTitle = document.createElement('h3');\n     const modalClose = document.createElement('button');\n     const itemImg = document.createElement('img');\n     const itemDescription = document.createElement('p');\n     const ingredients = document.createElement('ul');\n     const commentForm = document.createElement('form');\n     const name = document.createElement('input');\n     const comment = document.createElement('textarea');\n     const submitButton = document.createElement('button');\n     const commentDiv = document.createElement('div');\n     const commentHeader = document.createElement('h3');\n     const formHeader = document.createElement('h3');\n     modal.classList.add('modal');\n     modalHeader.classList.add('modal-header');\n     modalTitle.classList.add('title');\n     modalClose.classList.add('close-button');\n     modalBody.classList.add('modal-body');\n     name.classList.add('comment-name');\n     comment.classList.add('comment');\n     commentDiv.classList.add('comment-container');\n     commentForm.classList.add('comment-form');\n\n     modal.setAttribute('id', 'modal');\n     itemImg.setAttribute('height', '100');\n     name.setAttribute('type', 'text');\n     name.setAttribute('placeholder', 'Your name');\n     comment.setAttribute('placeholder', 'Your insights');\n     submitButton.setAttribute('type', 'submit');\n     commentForm.setAttribute('onSubmit', 'return false');\n\n     submitButton.innerHTML = 'Submit';\n\n     document.body.appendChild(modal);\n     modal.appendChild(modalHeader);\n     modal.appendChild(modalBody);\n     modalHeader.appendChild(modalTitle);\n     modalHeader.appendChild(modalClose);\n     modalBody.appendChild(ingredients);\n     modalBody.appendChild(itemImg);\n     modalBody.appendChild(itemDescription);\n     modalBody.appendChild(commentDiv);\n     modalBody.appendChild(commentForm);\n     commentForm.appendChild(formHeader);\n     commentForm.appendChild(name);\n     commentForm.appendChild(comment);\n     commentForm.appendChild(submitButton);\n\n     formHeader.innerHTML = 'Add a Comment';\n     return {\n       modal,\n       modalHeader,\n       commentDiv,\n       commentHeader,\n       modalClose,\n       itemImg,\n       itemDescription,\n       submitButton,\n       modalTitle,\n     };\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentView);\n\n//# sourceURL=webpack://capstone-project/./src/modules/CommentView.js?");

/***/ }),

/***/ "./src/modules/MicroverseAPI.js":
/*!**************************************!*\
  !*** ./src/modules/MicroverseAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchRequestClass)\n/* harmony export */ });\nclass FetchRequestClass {\n    method;\n\n      body;\n\n      headers;\n\n      url;\n\n      constructor({\n        method = 'GET',\n        body, url = '',\n        headers = { 'Content-type': 'application/json; charset=UTF-8' },\n      } = {}) {\n        this.method = method;\n        this.body = body;\n        this.headers = headers;\n        this.url = url;\n      }\n\n      async makeRequest() {\n        try {\n          const options = {\n            method: this.method,\n            body: JSON.stringify(this.body),\n            headers: this.method === 'POST' ? this.headers : undefined,\n          };\n\n          const reponse = await fetch(this.url, options);\n          if (reponse.status === 201) return null;\n          const data = await reponse.json();\n          return data;\n        } catch (error) {\n          throw new Error(error);\n        }\n      }\n\n      getItemByID = async (id) => {\n        const item = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)\n          .then((response) => response.json());\n        return item;\n      }\n\n      getComments = async (id) => {\n        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments?item_id=${id}`);\n        const data = await comments.json();\n        return data;\n      }\n\n      postComments = async (itemID, name, comment) => {\n        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/comments', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({\n            item_id: itemID,\n            username: name,\n            comment,\n          }),\n        });\n        return xxx;\n      }\n\n      getReserve = async (id) => {\n        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=${id}`);\n        const data = await comments.json();\n        return data;\n      }\n\n      postreservations = async (itemID, name, startDate, endDate) => {\n        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({\n            item_id: itemID,\n            username: name,\n            date_start: startDate,\n            date_end: endDate,\n          }),\n        });\n        return xxx;\n      }\n}\n\n//# sourceURL=webpack://capstone-project/./src/modules/MicroverseAPI.js?");

/***/ }),

/***/ "./src/modules/ReservationView.js":
/*!****************************************!*\
  !*** ./src/modules/ReservationView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ReservationView {\n  createModal = () => {\n    const modal = document.createElement('div');\n    const modalHeader = document.createElement('div');\n    const modalBody = document.createElement('div');\n    const modalTitle = document.createElement('h3');\n    const modalClose = document.createElement('button');\n    const itemImg = document.createElement('img');\n    const itemDescription = document.createElement('p');\n    const ingredients = document.createElement('ul');\n    const commentForm = document.createElement('form');\n    const name = document.createElement('input');\n    const startDate = document.createElement('input');\n    const endDate = document.createElement('input');\n    const submitButton = document.createElement('button');\n    const commentDiv = document.createElement('div');\n    const commentHeader = document.createElement('h3');\n    const formHeader = document.createElement('h3');\n    modal.classList.add('remodal');\n    modalHeader.classList.add('remodal-header');\n    modalTitle.classList.add('retitle');\n    modalClose.classList.add('reclose-button');\n    modalBody.classList.add('remodal-body');\n    name.classList.add('recomment-name');\n    startDate.classList.add('start-date');\n    endDate.classList.add('end-date');\n    startDate.setAttribute('type', 'date');\n    endDate.setAttribute('type', 'date');\n    commentDiv.classList.add('recomment-container');\n    commentForm.classList.add('recomment-form');\n\n    modal.setAttribute('id', 'modal');\n    itemImg.setAttribute('height', '100');\n    name.setAttribute('type', 'text');\n    name.setAttribute('placeholder', 'Your name');\n    startDate.setAttribute('placeholder', 'Start Date');\n    endDate.setAttribute('placeholder', 'End Date');\n    submitButton.setAttribute('type', 'submit');\n    commentForm.setAttribute('onSubmit', 'return false');\n\n    submitButton.innerHTML = 'Submit';\n    endDate.required = true;\n    startDate.required = true;\n\n    document.body.appendChild(modal);\n    modal.appendChild(modalHeader);\n    modal.appendChild(modalBody);\n    modalHeader.appendChild(modalTitle);\n    modalHeader.appendChild(modalClose);\n    modalBody.appendChild(ingredients);\n    modalBody.appendChild(itemImg);\n    modalBody.appendChild(itemDescription);\n    modalBody.appendChild(commentDiv);\n    modalBody.appendChild(commentForm);\n    commentForm.appendChild(formHeader);\n    commentForm.appendChild(name);\n    commentForm.appendChild(startDate);\n    commentForm.appendChild(endDate);\n    commentForm.appendChild(submitButton);\n\n    formHeader.innerHTML = 'Add a Reservation';\n    return {\n      modal,\n      modalHeader,\n      commentDiv,\n      commentHeader,\n      modalClose,\n      itemImg,\n      itemDescription,\n      submitButton,\n      modalTitle,\n    };\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationView);\n\n//# sourceURL=webpack://capstone-project/./src/modules/ReservationView.js?");

/***/ }),

/***/ "./src/modules/Util.js":
/*!*****************************!*\
  !*** ./src/modules/Util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Util)\n/* harmony export */ });\nclass Util {\n   openModal = (modal, overlay) => {\n     if (modal == null) return;\n     modal.classList.add('active');\n     overlay.classList.add('active');\n   }\n\n   closeModal = (modal, overlay) => {\n     if (modal == null) return;\n     modal.classList.remove('active');\n     overlay.classList.remove('active');\n   }\n\n   commentCounter = (comments) => {\n     let count = 0;\n     comments.forEach(() => {\n       count += 1;\n     });\n     return count;\n   }\n\n   reserveCounter = (comments) => {\n     let count = 0;\n     comments.forEach(() => {\n       count += 1;\n     });\n     return count;\n   }\n\n   loadReservations = (storedReserve, modalContainer) => {\n     modalContainer.commentDiv.innerHTML = '';\n     let numResve;\n     if (storedReserve.error) {\n       numResve = '';\n     } else {\n       numResve = this.reserveCounter(storedReserve);\n     }\n     modalContainer.commentHeader.innerHTML = `Resevations(${numResve})`;\n     modalContainer.commentDiv.appendChild(modalContainer.commentHeader);\n     if (storedReserve.error) {\n       return;\n     }\n     storedReserve.forEach((item) => {\n       const commentParagraph = document.createElement('p');\n       commentParagraph.innerHTML = `${item.date_start} <span class='comment-username'> ${item.date_end}:</span>   ${item.username}`;\n       modalContainer.commentDiv.appendChild(commentParagraph);\n     });\n   }\n\n   loadComments = (storedComments, modalContainer) => {\n     modalContainer.commentDiv.innerHTML = '';\n     let numComments;\n     if (storedComments.error) {\n       numComments = '';\n     } else {\n       numComments = this.commentCounter(storedComments);\n     }\n\n     modalContainer.commentHeader.innerHTML = `Comments(${numComments})`;\n     modalContainer.commentDiv.appendChild(modalContainer.commentHeader);\n     if (storedComments.error) {\n       return;\n     }\n     storedComments.forEach((item) => {\n       const commentParagraph = document.createElement('p');\n       commentParagraph.innerHTML = `${item.creation_date} <span class='comment-username'> ${item.username}:</span>   ${item.comment}`;\n       modalContainer.commentDiv.appendChild(commentParagraph);\n     });\n   }\n}\n\n//# sourceURL=webpack://capstone-project/./src/modules/Util.js?");

/***/ }),

/***/ "./src/modules/likeapi.js":
/*!********************************!*\
  !*** ./src/modules/likeapi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCom\": () => (/* binding */ getCom),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = 'ed0LORUs5gJKQQ4QLOxZ';\n\nconst postLike = async (itemID) => {\n  const response = await fetch(`${url}${appID}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemID }),\n  });\n  const post = await response.text();\n  return post;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(`${url}${appID}/likes`);\n  const likes = await response.json();\n  return likes;\n};\n\nconst getCom = async (idIem) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ed0LORUs5gJKQQ4QLOxZ/reservations?item_id=${idIem}`);\n  const likes = await response.json();\n  return likes;\n};\n\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likeapi.js?");

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