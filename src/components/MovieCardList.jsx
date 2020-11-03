import React from 'react';
import MovieCard from './MovieCard';//created another component for putting single movie data into each div container


//here we have section with div containers that take results value from our state
function MovieCardList({results}){
    return(
        <section className="movie-list">
            {results.map(data=>( //results will give us an array of objects so i have to use map function
                                // in order to get every single object in this array
                <MovieCard data={data}></MovieCard>
            ))}
        </section>
    );
}
export default MovieCardList;