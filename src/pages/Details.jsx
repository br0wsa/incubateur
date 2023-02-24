import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import{ useParams} from "react-router-dom";
import Footer from '../components/Footer';
import Navacceuil from '../components/Navacceuil';
import DFilms from '../components/DFilms';


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
        <Navacceuil />
            <div className=''>
                {data.results?.map((details) => (
                    <DFilms key={details.id} details={details} />
                ))}
            </div>
        <Footer />
    </div>
 );
};

export default Details;


