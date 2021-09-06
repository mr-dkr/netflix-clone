const API_KEY = "89a9d4cfb8f8e7d86df1c636da08796e";

const request = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-GB`,
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-GB`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request
