import './style.css';
import './modules/tools.js';
import modalReservation from './modules/modalReservation.js';

const reservationButton = document.querySelectorAll('.reservation');
reservationButton.forEach((element) => element.addEventListener('click', modalReservation));
