import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Details from './../pages/Details';


const Movies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });


    }, [])

    return (
        <>
            <div className='text-center w-201  bg-gray-800'>
            <div className="flex flex-nowrap gap-7 w-201  p-5 rounded-[8px]">
                {data.results?.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
        </>

    );
};


export default Movies;