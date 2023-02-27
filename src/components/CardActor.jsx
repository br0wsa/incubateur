import React from 'react';
import { Link } from 'react-router-dom';


function CardActor({ actor }) {
    return (
        <div className="infos w-64">
                <Link to={`/actor/${actor.id}`}>
                <div className=" duration-700 hover:scale-125 cursor-pointer">
                    <img className='rounded-[8px] w-440 h-660 m-2' src={"https://image.tmdb.org/t/p/original" + actor.profile_path} alt={actor.name} />
                </div>
                <div className="mov">
                    <h2><p>{actor.name}</p></h2>
                </div>
                </Link>
                
        </div>
    );
}

export default CardActor;