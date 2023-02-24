import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Details = () => {
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }, [])

    return (
        <div>
       
            <div className=''>
                <img className='' src={"https://image.tmdb.org/t/p/original" + data.backdrop_path} alt={data.original_title} />
                <h2><p>{data.title}</p></h2>
            </div>
 
        </div>
    );
};

export default Details;


