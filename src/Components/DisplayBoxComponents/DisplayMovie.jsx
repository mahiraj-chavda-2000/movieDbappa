import React from 'react';
import Moment from 'moment';
import './Display.css'



const IMAGES = "https://image.tmdb.org/t/p/original";
const DisplayMovie = (props) => {
    const NewDate = Moment(props.release_date).format('DD-MM-YYYY')
    const releseYear = Moment(props.release_date).format('YYYY')
    return (
        <div>


            <div class="movie_card" id="bright">
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={IMAGES + props.poster_path} alt={props.title} />
                        <h3>{props.title}</h3>
                        <h4>{releseYear}, David Ayer</h4>
                        <span class="minutes">{props.runtime} min</span>
                        <p class="type">Language : {props.original_language}</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">
                        {props.overview}
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

                <img src={IMAGES + props.poster_path} alt={props.title} />
                <div className="detail-movie">
                    <h2>{props.title}({releseYear})</h2>
                    <p>{NewDate}</p><br/>
                    <span>Language : {props.original_language}</span> <br/>
                    <span class="dot">{props.vote_average}</span> <br/>
                    <div className="overview">Overview: {props.overview}</div> 

                </div>
               
            </div> */}
        </div>
    )
}

export default DisplayMovie
