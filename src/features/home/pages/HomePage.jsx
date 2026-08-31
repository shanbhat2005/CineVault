import React, { useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HeroSection from '../components/HeroSection'
import MovieSection from '../components/MovieSection'
import {getTrendingMovies} from "../../../api/tmdb.api"

const HomePage = () => {


 useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
     <HomeNavbar/>
     <HeroSection/>
     <MovieSection/>
    </div>
  )
}

export default HomePage
