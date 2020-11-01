import React from 'react';
import MovieCard from './MovieCard';
function MovieCardList({results}){
    return(
        <section className="movie-list">
            {results.map(data=>(
                <MovieCard data={data}></MovieCard>
            ))}
        </section>
    );
}
export default MovieCardList;