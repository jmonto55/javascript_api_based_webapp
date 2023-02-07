import getMeals from './api.js';

const displayMeals = async () => {
  const idArr = await getMeals();
  const cardsCont = document.querySelector('.cards_container');
  for (let i = 0; i < 6; i += 1) {
    const id = idArr.meals[i].idMeal;
    const link = idArr.meals[i].strMealThumb;
    const meal = idArr.meals[i].strMeal;
    cardsCont.innerHTML += `
    <card id="${id}" class="card">
      <img src='${link}' class="card_image" alt="dog image" />
      <div class="card_body">
        <h2 class="card_title">${meal}</h2>
        <div class="like_container">
          <span class="like material-symbols-outlined">favorite</span>
          <p class="like_text">5 likes</p>
        </div>
      </div>
      <div class="buttons_container">
        <button class="comment btn">Comments</button>
        <button class="reservation btn">Reservations</button>
      </div>
    </card>`;
  }
};

displayMeals();