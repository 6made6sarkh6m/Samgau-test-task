import React from 'react';

function MovieCard({data}){
    return(
        <div className="card">
            <img src={data.Poster}/> 
            <h3>{data.Title}</h3>
        </div>
    )
}

export default MovieCard;