import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";
import DetailsMovie from "../components/DetailsMovie"



const DetailsActor = () => {
    const [movies, setMovie] = useState([]);
    const [actors, setActors] = useState([]);
    const params = useParams();
    
    const fetchData = () => {
        const actors = axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup film par ID*/
        const movies = axios.get(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup Acteur par ID du film */ 
        axios.all([actors,movies]).then(
            axios.spread((...allData) =>{
            const allDataActor = allData[0];
            const allDataMovie = allData[1];
    
            setActors(allDataActor.data);
            setMovie(allDataMovie.data['cast']);
            console.log(allDataMovie.data);
        }))
    }

    useEffect (() => {
        fetchData()
    }, [])

 return (
    <div> 
            <div className='container m-auto mb-5 '>
            <h2 className='text-xl pb-5'><p>{actors.name}</p></h2>
                <div className='flex'>
                    <img className='rounded-[8px] w-96' src={"https://image.tmdb.org/t/p/original" + actors.profile_path} alt={actors.original_title} />
                    <div className=' mx-5 p-1 bg-shark-900 rounded-[8px] '>
                        <p className='underline font-bold text-lg mb-5'> Biographie :</p>
                        <p>{actors.biography}</p>
                    </div>
                </div>
                <div>
                    <p className='underline font-bold text-lg '>Apparition :</p>
                    <div  className='actor flex gap-5 overflow-hidden  flex-wrap'>
                    {movies.map((movie) => (
                        <DetailsMovie key={movie.id} movie={movie} />
                ))}
                    </div>
                </div>
            </div>
    </div>
 );
};

export default DetailsActor;


