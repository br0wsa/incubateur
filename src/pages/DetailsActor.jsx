import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";



const Details = () => {
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/person/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }, [])

 return (
    <div> 
            <div className='container m-auto mb-5 '>
            <h2 className='text-xl pb-5'><p>{data.name}</p></h2>
                <div className='flex'>
                    <img className='rounded-[8px] w-96' src={"https://image.tmdb.org/t/p/original" + data.profile_path} alt={data.original_title} />
                    <div className=' mx-5 p-1 bg-shark-900 rounded-[8px] '>
                        <p className='underline font-bold text-lg mb-5'> Biographie :</p>
                        <p>{data.biography}</p>
                    </div>
                </div>
                <div>
                    <p className='underline font-bold text-lg '>Apparition :</p>
                    <div>
                        <img className='actor' src={"https://image.tmdb.org/t/p/original" + data.backdrop_path} alt={data.original_title} />
                    </div>
                </div>
            </div>
    </div>
 );
};

export default Details;


