import React from "react";
import { useState } from "react";
import{Rating} from 'react-simple-star-rating';

const ModalNote = () => {
    const [rating, setRating] = useState(0) // valeur initial
    const handleRating = (rate) => {
        setRating(rate)
    }

    return(
        <div className="overlay opacity-80 fixed inset-0 z-50">
            <div className=" bg-shark-900 flex h-screen justify-center items-center">
                <div className="flex-col justify-center py-12 px-24 border-4 rounded-[8px] border-shark-text">
                    <div className="flex text-lg mb-2 text-white">
                    <h3>Cliquez sur une étoile pour donner une note</h3>
                    </div>
                    <div className="flex flex-row justify-around">
                        <Rating className="" allowFraction showTooltip fillColor="#86C232" onClick={handleRating} ratingValue={rating} />
                    </div>
                </div>
            </div>
        </div>
    
    )

}

export default ModalNote