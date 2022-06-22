// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.scss';
import EventListerners from './modules/ReservationEventListener';
import getData from './foodapi.js';

EventListerners.buttonSubmit();
// import './style.css';

// load the basic info
getData();
EventListerners.reserveBtn();
EventListerners.closeBtn();