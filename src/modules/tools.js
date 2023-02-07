import getDog from './api.js';

const idArr = ['q8XC_2pym', 'BkrJjgcV7', 'ajJCO_lDC', 'SJyBfg5NX', 'r1ifZl5E7', 'pSoC1qW8n'];

const displayDogs = async () => {
  const cardsCont = document.querySelector('.cards_container');
  idArr.forEach(async (e) => {
    const dog = await getDog(e);
    cardsCont.innerHTML += `
      <card id="${dog.id}" class="card">
        <img src='${dog.url}' class="card_image" alt="dog image" />
        <div class="card_body">
          <h2 class="card_title">${dog.breeds[0].name}</h2>
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
  });
};

displayDogs();