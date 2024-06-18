import React from 'react'
import Layout from './../Layout/Layout';
import Banner from './../Components/Home/Banner';
import PopularMovies from './../Components/Home/PopularMovies';
import Promos from '../Components/Home/Promos';
import TopRate from '../Components/Home/TopRate';

function HomeScreen() {
  return (
    <>
      <Layout>
        <div className='container mx-auto min-h-screen px-2 mb-6'>
          <Banner/>
          <PopularMovies/>
          <Promos/>
          <TopRate/>
        </div>
      </Layout>
    </>
  )
}

export default HomeScreen