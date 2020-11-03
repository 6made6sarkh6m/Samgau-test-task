import React from 'react';
//This is a component for each movie card
//getting object from results array and putting Poster and Title values from this object into img and h3 tags respectively
function MovieCard({data}){
    return(
        <div className="card">
            <img src={data.Poster}/>
            <h3>{data.Title}</h3>
        </div>
    )
}

export default MovieCard;