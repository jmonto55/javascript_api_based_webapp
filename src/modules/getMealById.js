/* eslint-disable import/no-unresolved */
import axios from 'axios';

const getMealById = async (id) => {
  try {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = res.data;
    return result;
  } catch (error) {
    console.error('There was an error!', error);
  }
  return [];
};

export default getMealById;