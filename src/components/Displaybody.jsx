import React from 'react';
import Movie from '../components/Movie';
import Series from './Series';
import CardActor from '../components/CardActor';
import Card from './Card';
import CardSerie from './CardSerie';
import Actor from '../components/Actor';


const Displaybody = function ({ movies, category }) {
    console.log(movies)


    return (
        <>
<div className="primardisplay pt-10 h-80 flex flex-col items-center bg-shark-900 overflow-x-scroll">
    <h1 className="text-shark-text text-center text-xl lg:text-3xl w-full my-1 top-0">En ce moment</h1>
    <div className="flex m-auto container flex-row flex-nowrap overflow-x-auto whitespace-no-wrap">
        <div className="mr-4">
            <Movie />
            <hr className='border border-shark-text' />
            <Series />
        </div>
    </div>
</div>

<div className="secondarydisplay  antiscrollbar pt-6 flex flex-row flex-wrap justify-around bg-shark-gris overflow-y-scroll">
    <h2 className='text-center absolute text-shark-text top-0'></h2>
        <Actor />
</div>



             <div className="secondarydisplay h-72  border border-black pt-6 flex flex-row flex-wrap justify-around bg-shark-gris overflow-y-scroll">
                <h2 className="text-center text-shark-text top-0">Films</h2>
                {movies.map((movie) => (
                    category === "person" ?
                        <CardActor key={movie.id} actor={movie} /> :category === "tv" || category === "animation" ?<CardSerie key={movie.id} serie={movie} /> :<Card key={movie.id} movie={movie} />
                ))}

            </div> 
        </>
    );
};

export default Displaybody;