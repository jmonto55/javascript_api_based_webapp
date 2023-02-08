// Involvement API app_id: kpvz19cjHtM9ksn2bg7S

const getMeals = async () => {
  const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

const likeMeal = async (id) => {
  const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kpvz19cjHtM9ksn2bg7S/likes';
  fetch(API_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};

const getLikes = async () => {
  const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kpvz19cjHtM9ksn2bg7S/likes';
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export { getMeals, likeMeal, getLikes };