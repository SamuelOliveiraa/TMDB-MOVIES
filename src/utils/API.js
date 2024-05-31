const apiKey = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;
class API {
  static async get(page) {
    const data = await fetch(`${apiURL}discover/movie?api_key=${apiKey}&page=${page}`);
    const res = await data.json();
    return res.results;
  }

  static async getById(id) {
    const data = await fetch(`${apiURL}movie/${id}?api_key=${apiKey}`);
    const res = await data.json();
    return res;
  }

  static async search(query, page) {
    const data = await fetch(`${apiURL}search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
    const res = await data.json();
    return res;
  }
}

export default API;
