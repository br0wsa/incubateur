import React from 'react';
import Displaybody from '../components/Displaybody';
import Navmenu from '../components/Navmenu';
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