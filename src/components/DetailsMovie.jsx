import React from 'react';
import { Link } from 'react-router-dom';

function DetailsMovie({ movie }) {
    return (
        <div className=''>
            <Link to={`/movie/${movie.id}`}>
                <h2 className='text-center'>{movie.title}</h2>
                <img  className='  w-48 duration-700 hover:scale-95 cursor-pointer rounded-[8px] p-[2%] ' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
            </Link>
        </div>
    );
}

export default DetailsMovie;