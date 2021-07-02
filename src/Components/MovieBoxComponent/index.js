import React from 'react';
import Moment from 'moment';
import "./index.css";
import { NavLink ,useHistory} from 'react-router-dom';

const IMAGES = "https://image.tmdb.org/t/p/original";

const MovieComponent = (props) =>{
    let history = useHistory();
   
    const NewDate = Moment(props.release_date).format('DD-MM-YYYY')
    const changeMovie = () => {
        history.push(`/movie/${props.id}-${props.title}`)
    }
    return (
        <div className="movie"  >

            {/* <NavLink to={{pathname:`/movie/${props.id}-${props.title}`}} ></NavLink> */}
            <img src={IMAGES + props.poster_path} alt={props.title} onClick={changeMovie}/>
            <div className="movie-info">
                <h3>{props.title}</h3>
                <p>{NewDate}</p>

            </div>
        </div>
    )
}


export default MovieComponent
