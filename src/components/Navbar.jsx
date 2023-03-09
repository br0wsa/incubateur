import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../assets/images/Admin.svg';
import Logo from '../assets/images/Logo.svg'
import Acceuil from '../assets/images/Acceuil.svg';
import Chat from '../assets/images/Chat.svg';
import Compte from '../assets/images/Compte.svg';
import Notification from '../assets/images/Notification.svg';
import axios from 'axios';
import { useState } from 'react';

const Navbar = ({category,setMovies}) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (searchTerm.length < 2) return;
        Movies(searchTerm);
    }, [searchTerm])

    const Movies = (value) => {
        axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=836c908c992e085a541e9c67774163c7&query=${value}`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div>
            <nav className='bg-shark-900'>
                <div className="flex flex-row w-full">

                    <div className="flex lg:justify-start justify-center md:justify-center sm:justify-center w-full m-2 ">
                        <div className="border border-black bg-white rounded-full  w-128 h-128 ">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>

                    <div>
                        <div className="absolute top-0 right-0">
                            <div>
                                <Link to="/Admin"><img src={Admin} alt="icone admin" /></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex lg:justify-start justify-center md:justify-center sm:justify-center '>
                    <p className='text-5xl  mb-2 text-shark-text'>CinéFile</p>
                </div>
                <div className="invisible lg:visible sm:invisible md:visible md:mx-auto w-0 sm:w-0 md-:w-0  lg:w-full h-full flex justify-around align-center mt-5 lg:mt-10 sm:mt-5">
                    <Link to="/"><img src={Acceuil} alt="acceuil" /></Link>
                    <Link to="/Compte"><img src={Compte} alt="profil" /></Link>
                    <Link to="/chat"><img src={Chat} alt="chat" /></Link>
                </div>

                <div className="flex justify-center  w-full mb-4">
                    <input type="text" value={searchTerm} className=' rounded-3xl m-2 w-3/4' placeholder=' Rechercher' onChange={
                        (event) => {
                            const value = event.target.value;
                            setSearchTerm(value);
                        }} />

                    <div className='notification pb-6 pe-2 relative top-23 left-3 lg:left-28'>
                        <img src={Notification} alt="cloche notification" />
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
