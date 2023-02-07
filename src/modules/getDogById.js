import axios from "axios"

export const getDogById  = async id => { 
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result = await res.data
        console.log(result)
        return result;
      } catch (error) {
        console.error('There was an error!', error);
      }
}