
import { useState } from 'react'
import './Moviestyle.css'


export const MoviesApp = () => {
  
  const URL_BASE = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = '98d47fb0b69fb0b558d6e5bb647eaca7'

  const [search, setsearch] = useState('')
  const [movieList, setmovieList] = useState([])
  
  const handleInputChange = ({target}) =>{
    
    setsearch(target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    //console.log(search)
    fetchMovies()
  }
  
  const fetchMovies = async () => {
   
   try{
    const res = await fetch(`${URL_BASE}?query=${search}&api_key=${API_KEY}&language=es-ES`)
    const data = await res.json();
    setmovieList(data.results)
    console.log(movieList);
   }catch(error){
    console.error('ha ocurrido el siguiente error:', error)
   }
  }
  
  
  
  return (
    <div className="container">

    <h1>Buscador de Peliculas</h1>

    <form onSubmit={handleSubmit}>
        
        <input 
        type="text" 
        placeholder="Escribi una pelicula" 
        value={search}
        onChange={handleInputChange}
        />
        <button>Buscar</button>

    </form>

    {movieList &&
    <div className='movie-list'>

        {movieList.map(movie =>(
          <div key={movie.id} className='movie-card'>
            <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
 
    </div>
    }

    </div>
  )
} 
