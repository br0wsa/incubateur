import React from 'react';
import Navmenu from '../components/Navmenu';
import Displaybody from './../components/Displaybody';
const Acceuil = () => {
    return (
        <div>
            <div className="bg-shark-bg">
                <Navmenu />
                <Displaybody />
            </div>
        </div>
    );
};

export default Acceuil;