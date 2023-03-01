import React from 'react';
import Movie from '../components/Movie';
import Actor from '../components/Actor';


const Displaybody = () => {
    return (

        <>
        <div className="primardisplay pt-10 h-72 flex flex-row flex-wrap justify-around bg-shark-900 overflow-y-scroll">
            <h1 className='text-shark-text text-center text-xl lg:text-3xl w-full mt-1  top-1 '>En ce moment</h1>
           <Movie />;    
            </div>
        <div className="container m-auto pt-6  flex flex-row flex-wrap justify-around">
               <Actor />
            </div>
        </>

    );
};


export default Displaybody;