import React from 'react';

function Card({ movie }) {
    return (
        <div className="infos w-64">
            <div className="">
                <img className='rounded   pt-2' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
            </div>
            <div className="mov">
                <h2><p>{movie.title}</p></h2>
                <p>{movie.release_date + " | " + movie.vote_average + "/10 (" + movie.vote_count + ")"}</p>
            </div>
        </div>
    );
}

export default Card;