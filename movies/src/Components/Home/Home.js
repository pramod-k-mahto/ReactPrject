import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../context/Context'
import './Home.css'
import Search from '../Search/Search'
// import { useContext } from 'react'
const Home = () => {
  const { movies } = useContext(AppContext)
  // console.log("Home", movies)
  return (
    <>
      <Search />

      {/* 
      <div>Home</div>

      <Link to={"/"}> Home</Link><br />
      <Link to={"/Movies"}> Movies</Link><br />
      <Link to={"/Search"}> Search</Link><br />
      <Link to={"/SingleMovies"}> SingleMovies</Link><br/>  */}

      <section className='movie-page'>
        <div className='Container'>

          {

            movies.map((item) => {
              return (
                <NavLink to={`/movies/${item.imdbID}`} key={item.imdbID} className='nav' >
                  <div className='cardInfo'>
                    <div className='text'>
                      <h2>{item.Title}</h2>

                    </div>
                    <img src={item.Poster} alt='imdbID' />
                  </div>




                </NavLink>


              )
            })
          }



        </div>



      </section>


    </>


  )
}

export default Home