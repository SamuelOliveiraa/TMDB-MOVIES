class API {
  static async get(page) {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=acef416ba094cca22bc2cb7888b92b61&page=${page}`);
    const res = await data.json();
    return res.results;
  }

  static async getById(id) {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=acef416ba094cca22bc2cb7888b92b61`);
    const res = await data.json();
    return res;
  }

  static async search(query, page) {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=acef416ba094cca22bc2cb7888b92b61&query=${query}&page=${page}`);
    const res = await data.json();
    return res;
  }
}

export default API;
