import React, { useState } from 'react';
import Navmen from '../assets/images/Navmen.svg';

const Navmenu = ({category,setCategory }) => {

    const handleRadioChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="relative lg:p-5">
            <img className="w-screen" src={Navmen} alt="navmenu" />
            <div className="flex justify-around absolute h-full w-full items-center top-0 gap-1">
                <label htmlFor="movie">
                    Film
                    <input
                        className="m-2"
                        type="radio"
                        name="RadioButtons"
                        id="movie"
                        value="movie"
                        checked={category === 'movie'}
                        onChange={handleRadioChange}
                    />
                </label>
                <label htmlFor="series">
                    Series
                    <input
                        className="m-2 mb-1"
                        type="radio"
                        name="category"
                        id="series"
                        value="series"
                        checked={category === 'series'}
                        onChange={handleRadioChange}
                    />
                </label>
                <label htmlFor="animes">
                    Animés
                    <input
                        className="m-2 mb-1"
                        type="radio"
                        name="category"
                        id="animes"
                        value="animes"
                        checked={category === 'animes'}
                        onChange={handleRadioChange}
                    />
                </label>
                <label htmlFor="actors">
                    Acteur
                    <input
                        className="m-2 mb-1"
                        type="radio"
                        name="category"
                        id="actors"
                        value="actors"
                        checked={category === 'actors'}
                        onChange={handleRadioChange}
                    />
                </label>
            </div>
        </div>
    );

};

export default Navmenu;
