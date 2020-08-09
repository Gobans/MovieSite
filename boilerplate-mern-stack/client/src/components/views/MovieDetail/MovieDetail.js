import React,{useState,useEffect} from 'react'
import {API_URL,API_KEY,IMAGE_BASE_URL} from '../../Config'
import MainImage from '../LandingPage/Section/MainImage'
import MovieInfo from './Sections/MovieInfo'
function MovieDetail(props) {

    let movieId = props.match.params.movieId

    const [Movie, setMovie] = useState([])

    useEffect(() => {
        
        let endpointCrew =`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        

        fetch(endpointInfo)
        .then(res => res.json())
        .then(res => {
            setMovie(res)
            console.log(res)
        })
    }, [])



    return (
        <div>
            {/* Header */}
            {Movie != null &&
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} 
                title={Movie.original_title}
                text = {Movie.overview}
            />
            }

            {/* Body */}

            <div style={{width: '85%', margin: '1rem auto'}}>

            {/* Movie Info */}
            <MovieInfo
                movie = {Movie}
            
            />

            <br/>
            {/* Actors Grid */}
            </div>

            <div style ={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                <button> Toggle Actor View</button>


            </div>


        </div>
    )
}

export default MovieDetail
