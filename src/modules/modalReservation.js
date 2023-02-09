import addReservation from './addReservation.js';
import getMealById from './getMealById.js';
import { getReservationByItem } from './getReservationByItem.js';

const modalReservation = async (e) => {
  e.preventDefault();
  const { id } = e.target.parentElement.parentElement;
  const data = await getMealById(id);
  const modalContainer = await document.getElementById('modal-container');
  const ingredients = await data ? Object.keys(data.meals[0]).filter(((k) => k.startsWith('strIngredient'))).slice(0, 4) : [];
  const modalContent = document.getElementById('reservation_modal');
  modalContainer.style.display = 'block';
  modalContent.innerHTML = `
    <span id="close">&times</span>
    <img id='dog_img' src=${data.meals[0].strMealThumb} alt=${data.meals[0].strMeal
}></img>
    <h2 id='dog_name'>${data.meals[0].strMeal}</h2>
    <ul id='dog_spec'>
    ${ingredients.map((elt) => `<li>${data.meals[0][elt]}</li>`).join('')}

    </ul>
    
    <h3 id="total_reserve"></h3>
    <ul id="reservation_details">
   </ul>
    <form id=${id} class="reservation_data">
    <label> Name:
    <input type="text" name="name" id="name">
    </label><br/>
    <label> Start Date:
    <input type="date" name="date_start" id="date_start" >
    </label><br/>
    <label> End Date:
    <input type="date" name="date_end" id="date_end">
    </label><br/>
    <button id="reserve-btn" type="submit">Reservation</button>
    </form>`;
  await getReservationByItem(id);
  const span = document.getElementById('close');
  span.onclick = () => {
    modalContainer.style.display = 'none';
  };

  const reservationButton = document.getElementById('reserve-btn');
  reservationButton.addEventListener('click', addReservation);
  window.onclick = (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  };
};

export default modalReservation;