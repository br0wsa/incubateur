import React from 'react';
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";
import Footer from '../components/Footer';
import Navacceuil from '../components/Navacceuil';

const Details = () => {
    const [movie, setMovie] =useState({});
    const params = useParams();

    useEffect( () => {
        const getMovie = async () => {
        const result =  fetch(`http://localhost:5173/movie/${params.id}`);
        const data = result
        setMovie(data);
        console.log(movie);
        }
        getMovie();
    }, [])
 return (
    <div>
        <Navacceuil />
            <div className='container'>
                <h1>{movie.original_title}</h1>
                <img className='rounded-[8px] w-440 h-660 m-2' src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.original_title} />
            </div>
        <Footer />
    </div>
    
 );
};

export default Details;