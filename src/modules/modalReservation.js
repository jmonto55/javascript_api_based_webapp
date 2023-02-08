import { getDogById } from "./getDogById"

export const modalReservation = async e =>{
    e.preventDefault();
    const id = e.target.id;
    const data = await getDogById(id);
    console.log(Object.keys(data.meals[0]).filter((k=>k.startsWith('strIngredient'))).forEach(elt=>{if(data.meals[0][elt]){console.log(data.meals[0][elt])}}))
    const modalContainer = document.getElementsByClassName('modal')[0];
    modalContainer.style.display="block"
    const modalContent=document.getElementsByClassName('reservation')[0];
    const ingredients=Object.keys(data.meals[0]).filter((k=>k.startsWith('strIngredient')))
    const measures=Object.keys(data.meals[0]).filter((k=>k.startsWith('strMeasure')))
    modalContent.innerHTML = `
    <span id="close">&times</span>
    <img id='dog_img' src=${data.meals[0].strMealThumb} alt=${data.meals[0].strMeal
    }></img>
    <h2 id='dog_name'>${data.meals[0].strMeal}</h2>
    <p>${data.meals[0].strInstructions}</p>
    <ul id='dog_spec'>
    <li>Area:${data.meals[0].strArea}</li>

    <li>Category:${data .meals[0].strCategory}</li>
    ${ingredients.map((elt,n)=>`<li>${data.meals[0][elt] }:${data.meals[0][measures[n]]}</li>`).join('')}

    </ul>

    <form id="reservation_data">
    <label> Name:
    <input type="text" name="name" id="username" />
    </label><br/>
    <label> Start Date:
    <input type="date" name="date_start" id="date_start" />
    </label><br/>
    <label> End Date:
    <input type="date" name="date_end" id="date_end" />
    </label>
    </form>
    `

}