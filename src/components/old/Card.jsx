import React from 'react';
import ComingSoon from "../assets/images/cs.png";
import { Link } from 'react-router-dom';

function Card({ movie }) {
    return (
        <div className="infos w-64">
        <Link to={`/movie/${movie.id}`}>
            <div className=" duration-700 hover:scale-95 cursor-pointer">
            <h2 className='text-center'>{movie.title}</h2>
                <img className='rounded-[8px] w-440 h-660 m-2 ' src={movie.backdrop_path == null ? ComingSoon : "https://image.tmdb.org/t/p/original" + movie.backdrop_path  } />
            </div>
            <div className="mov">
            </div>
        </Link>
    </div>
    );
}
// probleme avec le format date 
// format(new Date(movie.release_date),"dd-mm-yyyy")
export default Card;