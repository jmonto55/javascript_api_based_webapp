import './style.css';
import './modules/tools.js';
import { modalReservation } from './modules/modalReservation';

// import 'bootstrap/dist/css/bootstrap.min.css';
//modalReservation('S14n1x9NQ')

const reservationButton = document.querySelectorAll(".reservation");
reservationButton.forEach(element => element.addEventListener('click',modalReservation));
