import React from 'react';

function DFilms({ details }) {
    return (
        <div className="infos ">
                <div className="">
                    <img className='' src={"https://image.tmdb.org/t/p/original" + details.backdrop_path} alt={details.original_title} />
                </div>
                <div className="">
                    <h2><p>{details.title}</p></h2>
                    <p>{details.release_date + " | " + details.vote_average + "/10 (" + details.vote_count + ")"}</p>
                </div>
        </div>
    );
}

export default DFilms;