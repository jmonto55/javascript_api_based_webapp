const getDog = async (id) => {
  const API_URL = `https://api.thedogapi.com/v1/images/${id}?limit=6&api_key=live_XmnH54dwpxOWIEAKOVCcIozrQJ1jpGu0dbxXUpJcadZqYHk4OHEqHwRlAgFwafkY`;
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export default getDog;