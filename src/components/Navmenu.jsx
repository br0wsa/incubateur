import React from 'react';
import { Link } from 'react-router-dom';
import navmenu  from '../assets/images/Navmenu.svg'
const Navmenu = () => {
    return (
            <div className="navmenu relative">
                <img className='w-screen' src={navmenu} alt="navmenu" />
                <div className='flex justify-around absolute h-full w-full items-center top-0  ' >
                    <Link to="/"><button className=''>Films</button></Link>
                    <Link to="/"><button>Series</button></Link>
                    <Link to="/"><button>Animés</button></Link>
                    <Link to="/"><button>Acteur</button></Link>
                </div>
            </div>
    );
};

export default Navmenu;