import axios from 'axios';
import { auth } from './../auth';

function getRecipes(query) {
  return axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=${auth.id}&app_key=${auth.key}&from=0&to=6`
  );
}

export { getRecipes };
