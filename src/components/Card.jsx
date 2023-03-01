import React from 'react';
import { Link } from 'react-router-dom';

function Card({ movie }) {
    return (
        <div className="infos w-64">
            <Link to={`/movie/${movie.id}`}>
                <div className=" duration-700 hover:scale-95 cursor-pointer">
                    <img className='rounded-[8px] w-440 h-660 m-2 ' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
                </div>
                <div className="mov">
                    <h2><p>{movie.title}</p></h2>
                    <p>{movie.release_date + " | " + movie.vote_average + "/10 (" + movie.vote_count + ")"}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;