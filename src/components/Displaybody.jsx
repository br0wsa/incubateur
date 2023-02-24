import React from 'react';
import Movies from './Movie';
import Card from './Card';
const Displaybody = () => {
    return (

        <>
            <div className="primarydisplay h-72 border border-black bg-shark-gris overflow-x-auto">
                <p className='text-center w-201 bg-gray-800 '>En ce moment</p>
                {/* {data.map(({ uuid, titre }) => <Cardthumb key={uuid} image={rick} description={titre} />)} */}
                <Movies />
            </div>
            <div className="secondarydisplay last:h-76 relative border border-black pt-6 flex flex-row flex-wrap justify-around bg-shark-gris overflow-x-scroll">
                <h2 className='text-center absolute text-shark-text top-0'>film</h2>
                {/* {data.map(({ uuid, titre }) => <Cardthumb key={uuid} image={rick} description={titre} />)} */}

            </div>
        </>

    );
};


export default Displaybody;