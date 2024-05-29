class API {
  static async get() {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=acef416ba094cca22bc2cb7888b92b61");
    const res = await data.json();
    return res.results;
  }

  static async getById(id) {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=acef416ba094cca22bc2cb7888b92b61`);
    const res = await data.json();
    return res;
  }

  static async search(query) {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=acef416ba094cca22bc2cb7888b92b61&query=${query}`);
    const res = await data.json();
    return res.results;
  }
}

export default API;
