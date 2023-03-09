import React, { useState } from 'react';
import Displaybody from '../components/Displaybody';
import React from 'react';
import Navmenu from '../components/Navmenu';

const Acceuil = ({ movies, category, setCategory}) => {


import Displaybody from './../components/Displaybody';
const Acceuil = () => {
    return (
        <div>
            <div className="bg-shark-bg">
                <Navmenu category={category} setCategory={setCategory}  />
                <Displaybody movies={movies} category={category} />
            </div>
        </div>
    );
};

export default Acceuil;
