import { addReservation } from "./addReservation";
import { getDogById } from "./getDogById"
import { getReservationByItem } from "./getReservationByItem";

export const modalReservation = async (e) =>{
    e.preventDefault();
    const id =  e.target.id;
    const data = await getDogById(id);
    
    
    
    const modalContainer = await document.getElementById('modal-container');
    let ingredients = await data ? Object.keys(data.meals[0]).filter((k=>k.startsWith('strIngredient'))) : [];
    let measures= await data? Object.keys(data.meals[0]).filter((k=>k.startsWith('strMeasure'))) : [];
    const modalContent=document.getElementsByClassName('reservation')[0];
    modalContainer.style.display = "block"
    modalContent.innerHTML = `
    <span id="close">&times</span>
    <img id='dog_img' src=${data.meals[0].strMealThumb} alt=${data.meals[0].strMeal
    }></img>
    <h2 id='dog_name'>${data.meals[0].strMeal}</h2>
    <p id='description'>${data.meals[0].strInstructions}</p>
    <ul id='dog_spec'>
    <li>Area:${data.meals[0].strArea}</li>

    <li>Category:${data .meals[0].strCategory}</li>
    ${ingredients.map((elt,n)=>`<li>${data.meals[0][elt] }:${data.meals[0][measures[n]]}</li>`).join('')}

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
    </form>`
    await getReservationByItem(id)
    const span = document.getElementById('close')
span.onclick = ()=> {
    modalContainer.style.display = "none";
  }

  const reservationButton = document.getElementById('reserve-btn')
  reservationButton.addEventListener('click',addReservation)
  window.onclick = (event)=> {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  }
}