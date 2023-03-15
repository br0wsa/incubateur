import React from 'react';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';

function Card({ movie }) {
    return (
        <div className="infos w-64 ">
            <Link to={`/movie/${movie.id}`}>
                <div className=" duration-700 hover:scale-95 cursor-pointer">
                    <img className='rounded-[8px] w-440 h-660 m-2 ' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
                </div>
                <div className="mov">
                    <h2><p>{movie.title}</p></h2>
                    <p>{ + " | " + movie.vote_average + "/10 (" + movie.vote_count + ")"}</p>
                </div>
            </Link>
        </div>
    );
}
// probleme avec le format date 
// format(new Date(movie.release_date),"dd-mm-yyyy")
export default Card;