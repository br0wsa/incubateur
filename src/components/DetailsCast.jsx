import React from 'react';
import unknow from "../assets/images/unknow.png";
import { Link } from 'react-router-dom';

function Card({ actor }) {
  

    return (
        
        <div className=''>
            <Link to={`/actor/${actor.id}`}>
                <div className='w-48'>
                    <h2 className='text-center'>{actor.name}</h2>
                    <img className='w-48 duration-700 hover:scale-95 cursor-pointer rounded-[8px] p-[2%] ' src={actor.profile_path == null ? unknow : "https://image.tmdb.org/t/p/original" + actor.profile_path  }/> 
                    <p className='text-center'>{actor.character}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;