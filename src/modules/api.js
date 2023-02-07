const getMeals = async () => {
  const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export default getMeals;