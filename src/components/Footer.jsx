import React from 'react';
import { Link } from 'react-router-dom';
import Acceuil from '../assets/images/Acceuil.svg';
import Compte from '../assets/images/Compte.svg';
import Chat from '../assets/images/Chat.svg';


const Footer = () => {
    return (
        <div className='footer flex justify-center content-center bg-shark-900'>
            <div className="w-72 sm:w-72 lg:w-full h-full flex justify-around align-center mt-5 lg:mt-10 sm:mt-5">
                <Link to="/"><img src={Acceuil} alt="acceuil" /></Link>
                <Link to="/Compte"><img src={Compte} alt="profil" /></Link>
                <Link to="/chat"><img src={Chat} alt="chat" /></Link>
            </div>

        </div>
    );
};

export default Footer;