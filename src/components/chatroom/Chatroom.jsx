import React from 'react';
import Message from '../../assets/images/Message.svg'

const Chatroom = () => {
    return (
        <div className='flex justify-center h-full min-w-min'>
            <div className='flex-grow bg-shark-gris flex-col w-full h-full'>
                <div className="sm:flex sm:flex-col lg:w-11/12 bg-shark-900 mx-auto sm:w-80  m-5 p-2">
                    <p className='text-shark-text lg:text-7xl  sm:mx-auto font-bold'>CineChat</p>
                    <p className='visible sm:visible md:visible lg:invisible mx-auto sm:mx-auto text-red-400 '> Cinefile en ligne a finir </p>
                </div>
                <div className="rounded lg:w-11/12  md:w-11/12 sm:w-80 w-80 bg-shark-900 h-screen m-10 mx-auto ">
                    <p >hello</p>
                </div>

                <div className="relative rounded lg:w-11/12  md:w-11/12 sm:w-80 w-80 h-20 m-10 ">
                    <img className='absolute right-10 top-6 p-2' src={Message} alt="" />
                    <div className=" rounded w-11/12  bg-shark-900 h-20  m-10  ">
                        <textarea class="w-full h-full p-2 border rounded-lg resize-none" name="" id="" cols="30" rows="10" placeholder='Entrez votre messages'></textarea>
                    </div>
                </div>
            </div>
            <div className='invisible sm:display:none md:visible lg:visible flex flex-col bg-shark-gris lg:w-1/3 md:1/2 sm:w-0 w-0'>
                <div className='m-5 w-11/12 h-1/4  bg-shark-900'>
                    <p>profil</p>
                </div>
                <div className="flex justify-center rounded mt-10 w-11/12 bg-shark-900 h-2/4 m-5 ">
                    <p className='p-3 invisible sm:invisible md:invisible lg:visible sm:w-0 '>Cinefile en ligne</p>
                </div>
            </div>
        </div>
    );
};

export default Chatroom;