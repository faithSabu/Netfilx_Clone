import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube, { YouTubeProps } from 'react-youtube';
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      setMovies(res.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleMovie = (movieId) => {
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0])
      }else{
        console.log('Trailer not available');
      }
    })
  }


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map(movie=>
              <img onClick={()=>handleMovie(movie.id)} key={movie.id}  className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />
            )
          }
        </div>
           { urlId && <YouTube  videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost