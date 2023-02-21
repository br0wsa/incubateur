import React from 'react';
import Navacceuil from '../components/Navacceuil';
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import Movie from '../components/Movie';

const Welcome = () => {
    return (
        <div>
            <div>
                <Navacceuil />
                <Navmenu />
                <Movie />
                <Footer />
            </div>
        </div>
    );
};

export default Welcome;