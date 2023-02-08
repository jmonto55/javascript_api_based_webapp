// data here can be comment or reservation and can be empty in case there is no comment or reservation
export const displayPopup = (meal, data = null) => {
    const container = document.getElementById('mondalContent');
    container.replaceChildren();
    const itemCard = `
    <card class="card">
    <div class="popup-img">
        <img src='${link}' class="card_image" alt="dog image" />
    </div>
      <div class="card_body">
        <h2 class="card_title">${meal}</h2>
        <div class="like_container">
          <span class="like material-symbols-outlined">favorite</span>
          <p class="like_text">${likes} likes</p>
        </div>
        <form>
            <div>
                <input type="text" id="name" name="name" placeholder="Your Name">
            </div>
            <div>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Your insight"></textarea><br>
            </div>
            <div class="buttons_container">
            <button class="btn btn-outline-dark">Submit</button>
          </div>
        </form>
      </div>
    </card>`;
    container.insertAdjacentHTML('beforeend', list);
}