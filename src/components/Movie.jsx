import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Movies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=836c908c992e085a541e9c67774163c7&language=en-US&page=1')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });

    }, [])

    return (
        <div className="movies flex flex-row justify-around ">
            <div className="container flex justify-around flex-wrap gap-4 bg-gray-800 my-5">
                {data.results?.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};


export default Movies;