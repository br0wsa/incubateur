import React from 'react';
import Movie from '../components/Movie';
import Series from './Series';
import Actor from '../components/Actor';
import Cardthumb from './Cardthumb';
import Movies from './Movie';

const Displaybody = function ({movies }) {
    console.log(movies)


    return (
        <>
        <div className="primardisplay pt-10 h-80 flex flex-row flex-wrap justify-around bg-shark-900 overflow-x-scroll">
            <h1 className='text-shark-text text-center text-xl lg:text-3xl w-full mt-1 top-1 '>En ce moment</h1>
           <Movie />; 
           <Series />;   
            </div>
        <div className="container m-auto pt-6  flex flex-row flex-wrap justify-around">
               <Actor />
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