import { endPoints } from './config.js';
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php';
const baseUrlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi'
const axios = require('axios');

const getComments = async (itemId) => {
    const meal = await axios.get(baseUrl, {
        params: {
            i: itemId
        }
    })

    try{
        const comments = await comment(itemId)
        console.log("comments are ", comments.data)
        console.log("meal is ", meal.data.meals[0])
        displayPopup(meal.data.meals[0], comments.data)
        displayComments(comments.data)
        formEventListener()

    }catch(error){
        displayPopup(meal.data.meals[0])
        formEventListener()
    }
}
const commentListener = () => {
    const element = document.getElementById('data')
    element.addEventListener("click", (e) => {
        if (e.target.matches('.comment')) {
            console.log("target", e.target)
            let itemId = (e.target.id).split('_');
            itemId = Number(itemId[itemId.length - 1]);
            console.log("item", itemId)
            getComments(itemId)
        }
    })
}


const formEventListener = () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('mealId').value
        const commentObj = {
            username: document.getElementById('name').value,
            comment: document.getElementById('comment').value,
            item_id: id
        };
        postComment(commentObj, id);
    });
}


commentListener();

const displayPopup = (meal, comment = null) => {
    document.getElementById('myModal').style.display = 'block';
    console.log("meal", meal, comment)
    const container = document.getElementById('mondalContent');
    container.replaceChildren();
    let ul;
    console.log("ul", ul)
    const itemCard = `
    <card class="">
        <div class="popup-img">
        <img src='${meal.strMealThumb}' class="card_image" alt="dog image" />
        </div>
      <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <div class="meal_container">
            <div>
                <p>${meal.strIngredient1}</p>
                <p>${meal.strIngredient2}</p>
            </div>
            <div>
                <p>${meal.strIngredient3}</p>
                <p>${meal.strIngredient4}</p>
            </div>
        </div>
        <h5>Comments (${comment? comment.length: 0})</h5>
        <div class="comment_container" id="comment_container">
           ${ul? ul.innerHTML: ''}
        </div>
        <h5>Add a comment</h5>
        <form id="form" class="comment_form">
            <input type="hidden" value="${meal.idMeal}" id="mealId"/>
            <div>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div>
                <textarea id="comment" name="w3review" rows="4" cols="50" placeholder="Your insight" required></textarea><br>
            </div>
            <div class="buttons_container">
            <button class="btn btn-outline-dark">Submit</button>
          </div>
        </form>
      </div>
    </card>`;
    container.insertAdjacentHTML('beforeend', itemCard);
}

const displayComments = (comments) => {
    const container = document.getElementById('comment_container')
    container.replaceChildren();
    const list = document.createElement('ul')
    for (let i = 0; i < comments.length; i++) {
        let listItem = `<li class="list_item">
                <span>${comments[i].creation_date} </span>
                <span>${comments[i].username}: </span> 
                <span>${comments[i].comment}</span>
            </li>`
        list.insertAdjacentHTML('beforeend', listItem)
    }
    container.appendChild(list)
    return container;
}

const postComment = async (obj, id) => {
    await axios.post(baseUrlLikes + endPoints().comment, obj)
    let comments = await comment(id)
    await displayComments(comments.data)
    console.log("comments from second function", comments.data)
    document.getElementById('form').reset();
}

const comment = async (id) => {
    return await axios.get(baseUrlLikes + endPoints().comment,{
        params: {item_id:id}
    });
}
