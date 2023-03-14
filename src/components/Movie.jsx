import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Movies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU')
            .then((res) => {
                setData(res.data);
            });

    }, [])

    return (
        <div className="movies flex flex-row justify-around ">
         
            <div className="container flex justify-around flex-wrap gap-4 bg-shark-900 p-5 my-5 rounded-[8px]">
                {data.results?.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};


export default Movies;