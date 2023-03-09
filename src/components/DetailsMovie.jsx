import React from 'react';
import ComingSoon from "../assets/images/cs.png";
import { Link } from 'react-router-dom';

function DetailsMovie({ movie }) {
    return (
        <div className=''>
            <Link to={`/movie/${movie.id}`}>
                <ul>
                    <li>
                    <h2 className='text-center flex-wrap'>{movie.title}</h2>
                <img  className=' w-72 duration-700 hover:scale-95 cursor-pointer rounded-[8px] p-[2%] ' src={movie.backdrop_path == null ? ComingSoon : "https://image.tmdb.org/t/p/original" + movie.backdrop_path  }/>
                    </li>
                </ul>
              
            </Link>
        </div>
    );
}

export default DetailsMovie;