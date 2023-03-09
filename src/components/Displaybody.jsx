import React from 'react';
import Cardthumb from './Cardthumb';
import Movies from './Movie';

const Displaybody = function ({movies }) {
    console.log(movies)


    return (
        <>

            <div className="primarydisplay h-72 border border-black bg-shark-gris overflow-x-auto">
                <p className="text-center w-201 bg-gray-800 text-2xl ">En ce moment</p>
                <Movies />
            </div>
            <div className="secondarydisplay h-72 relative border border-black pt-6 flex flex-row flex-wrap justify-around bg-shark-gris overflow-x-scroll">
                <h2 className="text-center absolute text-shark-text top-0">Films</h2>

                {movies.map((movie) => (
                    <Cardthumb
                        key={movie.id}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        description={movie.title} />
                ))}
            </div>
        </>
    );
};

export default Displaybody;