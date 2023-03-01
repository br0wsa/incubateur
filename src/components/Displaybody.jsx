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
        <div className="secondarydisplay container m-auto antiscrollbar pt-6  flex flex-row flex-wrap justify-around overflow-y-scroll">
                <h2 className='text-center text-shark-text top-0'></h2>
               <Actor />
            </div>
        </>

    );
};


export default Displaybody;