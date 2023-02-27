import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardActor from './CardActor';



const Movies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/person/popular?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
            

    }, [])

    return (
        <div className="movies flex flex-row justify-around ">
            <div className="container flex justify-around flex-wrap gap-4 bg-shark-900 p-5 my-5 rounded-[8px]">
                {data.results?.map((actor) => (
                    <CardActor key={actor.id} actor={actor} />
                ))}
            </div>
        </div>
    );
};


export default Movies;