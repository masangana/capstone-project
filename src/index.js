// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import getData from './foodapi.js';
import {getLikes, postLike} from './modules/likeapi.js'
EventListerners.buttonSubmit();
// import './style.css';

// load the basic info
getData();
EventListerners.reserveBtn();
EventListerners.closeBtn();

postLike(52819)
postLike(53043);
postLike(52944);

getLikes(); 



