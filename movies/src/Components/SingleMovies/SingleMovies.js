import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
// import Movies from '../Movies/Movies'
import { url } from '../context/Context'
import { AppContext } from '../context/Context'
import './SingleMovies.css'
const SingleMovies = () => {
  const [movies, setMovies] = useState([])
  const { query, setQuery } = useContext(AppContext);


  const { id } = useParams()
  async function getMovies() {
    const response = await fetch(`${url}&s=${query}`)
    const data = await response.json()
    const newData = data.Search
    const list = await newData.find((item) => {
      return item.imdbID === id;
    })
    console.log(list);
    setMovies([list])


  }

  useEffect(() => {
    getMovies();
  }, [])



  return (
    <>
      {

        movies.map((item) => {
          return (
            <div key={item.imdbID}>

              <div className='main-card'>

                <div className='image-card'>
                  <img src={item.Poster} alt='imddb' />
                </div>

                <div className='movie-detail'>
                  <p>Movie Name : {item.Title}</p>
                  <p>Release Date: {item.Year}</p>
                  <button className='nav-link'>
                  <NavLink to='/'>Go Back</NavLink>


                  </button>

                </div>




              </div>





            </div>
          )
        })
      }
      <div>


      </div>




    </>

  )
}

export default SingleMovies