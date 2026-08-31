import axios from "axios"

const tmdbApi= axios.create({
    baseURL:"https://api.themoviedb.org/3",
     headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    accept: "application/json",
  },
})


 export const getTrendingMovies=async ()=>{
 
    const res= await tmdbApi.get("/trending/movie/week")
return res.data

}


export default tmdbApi