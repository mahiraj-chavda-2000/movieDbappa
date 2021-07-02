import React, { useState, useEffect } from 'react';
import { MovieDBApiKey } from '../utils/config';
import "../Components/MovieBoxComponent/index.css"
import MovieComponent from '../Components/MovieBoxComponent';
import Pager from '../Components/Pagination/Pager';
import { ScrollEvent } from '../Components/Pagination/ScrollEvent';
import Paginate from '../Components/Pagination/Paginate';

const Movie = (props) => {
    //States
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    
    

    // UseEffect
    useEffect(async () => {
        await fetchMovieData(1)
    }, [])
    

    // Api methods
    const fetchMovieData = (initial) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MovieDBApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${initial}`).then(res => res.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }

    const scroll = (pageData)=>{
        setPage(pageData+1)
        fetchMovieData(pageData + 1)
    }

    // Render Mehods
    return (
        <div className="movie-container" onScroll={()=>scroll(page)}>
            {movies.length > 0 && movies.map((movie, index) =>
                <MovieComponent key={movie.id || index} {...movie} />
            )}
            {/* <Paginate  page={page} setPage={setPage} /> */}
            {/* <ScrollEvent page={page} setPage={setPage}/> */}
            {/* <Pager page={page} setPage={setPage}/> */}
        </div>
    )
}

export default Movie
