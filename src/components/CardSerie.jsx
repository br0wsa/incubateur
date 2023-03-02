import React from 'react';
import { Link } from 'react-router-dom';

function CardSerie({ serie }) {
    return (
        <div className="infos w-64">
            <Link to={`/serie/${serie.id}`}>
                <div className=" duration-700 hover:scale-95 cursor-pointer">
                <h2 className='text-center'>{serie.name}</h2>
                    <img className='rounded-[8px] w-440 h-660 m-2 ' src={"https://image.tmdb.org/t/p/original" + serie.backdrop_path} alt={serie.original_title} />
                </div>
                <div className="mov">
           
                </div>
            </Link>
        </div>
    );
}

export default CardSerie;