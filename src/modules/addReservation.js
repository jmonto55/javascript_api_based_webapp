import axios from 'axios';
import { getReservationByItem } from './getReservationByItem.js';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const addReservation = async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const dateStart = document.getElementById('date_start').value;
  const dateEnd = document.getElementById('date_end').value;
  const itemId = e.target.parentElement.id;
  const endpoint = 'apps/kpvz19cjHtM9ksn2bg7S/reservations/';
  const postData = {
    item_id: itemId, username: name, date_start: dateStart, date_end: dateEnd,
  };
  try {
    await axios.post(baseUrl + endpoint, postData);
    await getReservationByItem(itemId);
    document.getElementById(itemId).reset();
  } catch (error) {
    console.error('There was an error!', error);
  }
};

export default addReservation;