import React, { useState, useEffect } from 'react';
import DisplayMovie from './DisplayMovie';
import Moment from 'moment';
import './Display.css'
import { useParams } from 'react-router';
import { MovieDBApiKey } from '../../utils/config';

const GetMovieInfo = (props) => {

    const { id } = useParams()
    const GetMovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${MovieDBApiKey}&language=en-US`
    const [info, setInfo] = useState([])
    useEffect(async () => {
        await fetchMovieData()
    }, [])
    const fetchMovieData = () => {
        fetch(GetMovieApi).then(res => res.json())
            .then(data => {
                console.log(data)
                setInfo(data)
            })
    }

    const renderDisplayMovieInfo = () => {
        const IMAGES = "https://image.tmdb.org/t/p/original";
        const NewDate = Moment(info.release_date).format('DD-MM-YYYY')
        const releseYear = Moment(info.release_date).format('YYYY')
        return (
            <div>


                <div class="movie_card" id="bright">
                    <div class="info_section">
                        <div class="movie_header">
                            <img class="locandina" src={IMAGES + info.poster_path} alt={props.title} />
                            <h3>{info.title}</h3>
                            <h4>{releseYear}, David Ayer</h4>
                            <span class="minutes">{info.runtime} min</span>
                            <p class="type">Language : {info.original_language}</p>
                        </div>
                        <div class="movie_desc">
                            <p class="text">
                                {info.overview}
                            </p>
                        </div>
                        <div class="movie_social">
                            <ul>
                                <li><i class="material-icons">share</i></li>
                                <li><i class="material-icons"></i></li>
                                <li><i class="material-icons">chat_bubble</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blur_back bright_back"></div>
                </div>

                {/* <div className="movies">
        
                        <img src={IMAGES + info.poster_path} alt={info.title} />
                        <div className="detail-movie">
                            <h2>{info.title}({releseYear})</h2>
                            <p>{NewDate}</p><br/>
                            <span>Language : {info.original_language}</span> <br/>
                            <span class="dot">{info.vote_average}</span> <br/>
                            <div className="overview">Overview: {info.overview}</div> 
        
                        </div>
                       
                    </div> */}
            </div>
        )
    }
    return (
        <div className="movie-container">
            {renderDisplayMovieInfo()}
            {/* {renderActorsInfoView()} */}
        </div>
    )
}

export default GetMovieInfo
