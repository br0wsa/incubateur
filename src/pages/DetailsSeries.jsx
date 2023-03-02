import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";
import DetailsCast from '../components/DetailsCast';




const DetailsSeries = () => {
    const [movie, setMovie] = useState([]);
    const [actors, setActors] = useState([]);
    const params = useParams();
    
    const fetchData = () => {
        const movie = axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup film par ID*/
        const actors = axios.get(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup Acteur par ID du film */ 
        axios.all([movie,actors]).then(
            axios.spread((...allData) =>{
            const allDataMovie = allData[0];
            const allDataActor = allData[1];

            setMovie(allDataMovie.data);
            setActors(allDataActor.data['cast']);
            console.log(allDataMovie.data);
        }))
    }

useEffect (() => {
    fetchData()
}, [])

 return (
    
    <div> 
            <div className='container m-auto mb-5 '>
            <h2 className='text-xl pb-5'><p>{movie.name}</p></h2>
                <div className='flex'>
                    <img className='rounded-[8px] w-96' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
                    <div className=' mx-5 p-1 bg-shark-900 rounded-[8px] '>
                        <p className='underline font-bold text-lg '>Synopsis:</p>
                        <p>{movie.overview}</p>
                        <hr className='my-5 border-1 border-[#86C232]'/>
                        <div className='flex justify-between pt-5'>
                            <p>{movie.origin_country}</p>
                            <p>{movie.first_air_date}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Temps moyen d'un épisode : {movie.episode_run_time} min</p>
                    <p>{movie.number_of_seasons} Saison</p>
                    <p className='underline font-bold text-lg '>Apparition :</p>
                    <div className='actor flex gap-5 overflow-hidden  flex-wrap'>
                    {actors.map((actor) => (
                        <DetailsCast key={actor.id} actor={actor} />
                ))}
                    </div>
                </div>
            </div>
    </div>
 );
};

export default DetailsSeries;


