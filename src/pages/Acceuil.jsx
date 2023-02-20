import React from 'react';
import Navacceuil from '../components/Navacceuil';
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
const Acceuil = () => {
    return (
        <div>
            <div className="bg-shark-bg">
                <Navacceuil />
                <Navmenu />
                <Footer />
            </div>
        </div>
    );
};

export default Acceuil;