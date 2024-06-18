import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'
import MovieInfo from './Single/MovieInfo'
import MovieCasts from './Single/MovieCasts';
import MovieRates from './Single/MovieRates';
import { BsCollectionFill } from 'react-icons/bs'
import Titles from './../Components/Titles';
import Movie from './../Components/Movie';

function SingleMovie() {
  const {id} = useParams()
  const movie = Movies.find(movie => movie.name === id)
  const RelatedMovies = Movies.filter(film => film.name === movie.name)

  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts/>
        {/* rate */}
        <MovieRates movie={movie}/>
        {/* related */}
        <div className='my-16'>
          <Titles title='Related Movies' Icon={BsCollectionFill}/>
          <div className='grid sm:mt-10 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {
            RelatedMovies.map((movie, index) => (
              <Movie key={index} movie={movie}/>
            ))
          }
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleMovie