import React from 'react';
import { useState } from "react";
import Modal from "./Listusers.jsx";
import Message from '../../assets/images/Message.svg'

const Chatroom = () => {

    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() { setIsOpen(!isOpen); }
    return (
        <div className='flex justify-center h-full min-w-min'>
            <div className='flex-grow bg-shark-gris flex-col w-full h-full'>
                <div className=" sm:flex-col lg:w-11/12  md:w-11/12 sm:w-80 w-80  bg-shark-900 mx-auto m-5 p-2">
                    <p className='text-shark-text md:text-7xl lg:text-7xl  sm:mx-auto md:mx-auto lg:mx-0 font-bold'>CineChat</p>
                    <p className='visible sm:visible md:visible lg:invisible mx-auto sm:mx-auto text-red-400 ' onClick={toggleModal} > Cinefile en ligne a finir </p>
                    <Modal open={isOpen} onClose={toggleModal} />
                </div>
                <div className="rounded lg:w-11/12  md:w-11/12 sm:w-80 w-80 bg-shark-900 h-screen m-10 mx-auto ">
                    <p >hello</p>
                    
                </div>

                <div className="relative  rounded lg:w-11/12 md:w-11/12 sm:w-80 w-80 h-20 m-10">
                    <button className='absolute right-10 top-4 p-2 flex items-center'>
                        <p className='border-spacing-1 border-l border-t border-b border-shark-text
                bg-shark-900 inline-flex p-2 rounded-l text-xl align-middle'>Send</p>
                        <img className='border-r border-t border-b border-shark-text
                bg-shark-900 right-10 inline-flex p-2 rounded-r'src={Message} alt="Sending " />
                    </button>
                    <div className="rounded w-11/12 bg-shark-900 h-20 m-10">
                        <textarea className="w-full h-full p-2 border rounded-lg resize-none"
                            name="" id="" cols="30" rows="10" placeholder='Messages'>
                        </textarea>
                    </div>
                </div>


            </div>
            <div className='hidden lg:flex flex-col bg-shark-gris lg:w-1/3 md:1/2 sm:w-0 w-0'>
                <div className='invisible sm:display-none md:visible lg:visible m-5 p-3 w-11/12 lg:w-11/12 md:1/2 sm:w-0 h-1/4  bg-shark-900'>
                    <p>profil</p>
                </div>
                <div className="flex justify-center rounded mt-10 bg-shark-900 h-2/4 m-5 ">
                    <p className=' invisible sm:invisible md:invisible lg:visible m-5 p-3 lg:w-11/12 md:w-0 sm:w-0 '>Cinefile en ligne</p>
                </div>
            </div>
        </div>
    );
};

export default Chatroom;