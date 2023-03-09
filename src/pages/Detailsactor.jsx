import React from 'react';
import axios from 'axios';
import unknow from "../assets/images/unknow.png";
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";
import DetailsMovie from "../components/DetailsMovie"
import CardSerie from "../components/CardSerie"



const DetailsActor = () => {
    const [movies, setMovie] = useState([]);
    const [actors, setActors] = useState([]);
    const [series, setSeries] = useState([]);
    const params = useParams();
    
    const fetchData = () => {
        const actors = axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup film par ID*/
        const movies = axios.get(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`);
        const series = axios.get(`https://api.themoviedb.org/3/person/${params.id}/tv_credits?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`); /* Recup Acteur par ID du film */ 
        axios.all([actors,movies,series]).then(
            axios.spread((...allData) =>{
            const allDataActor = allData[0];
            const allDataMovie = allData[1];
            const allDataSerie = allData[2];
    
            setActors(allDataActor.data);
            console.log(allDataActor.data);
            setMovie(allDataMovie.data['cast']);
            setSeries(allDataSerie.data['cast']);
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
                    <img className='rounded-[8px] w-96' src={actors.profile_path == null ? unknow : "https://image.tmdb.org/t/p/original" + actors.profile_path  } />
                    <div className=' mx-5 p-1 bg-shark-900 rounded-[8px] '>
                        <p className='underline font-bold text-lg mb-5'> Biographie :</p>
                        <p>{actors.biography == "" ? "La biographie de cet acteur est en cours d'écriture" : actors.biography}</p>
                    </div>
                </div>
                <div>
                    <p className='underline font-bold text-lg '>Apparition :</p>
                    <div className='movie flex gap-5 overflow-hidden  flex-wrap'>
                        <h2 className='w-full py-2'>Film :</h2>
                    {movies.map((movie) => (
                        <DetailsMovie key={movie.id} movie={movie} />
                    ))}
                </div>
                <div>
                    <div className='actor flex gap-5 overflow-hidden  flex-wrap'>
                        <h2 className='w-full py-2'>Series :</h2>
                        {series.map((serie) => (
                                <CardSerie key={serie.id} serie={serie} />
                        ))}
                    </div>
                </div>
                </div>
            </div>
    </div>
 );
};

export default DetailsActor;


