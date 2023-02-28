import React        from 'react';
import { useState } from "react";
import { UserIcon, UserGroupIcon } from '@heroicons/react/solid';
import { Switch }   from '@headlessui/react'
import Userlist     from './Userlist.jsx';
import UsersModal   from './Listusersmodal.jsx';
import Message      from '../../assets/images/Message.svg';
import Fakedata     from './Fakedata.jsx';
const Chatroom = () => {
    //usestate modal contact 
    const [isOpen, setIsOpen] = useState(false);
    function usersModal() { setIsOpen(!isOpen); }

    // usestate modal signalement 
    const [signalOpen, setIssignalOpen] = useState(false);
    // bouton en ligne
    const [connected, setConnected] = useState(false)
  
  
    return (
        <div className='flex h-full min-w-min'>
            <div className='flex-grow bg-shark-gris flex-col w-full h-full'>
                <div className=" sm:flex-col lg:w-11/12  md:w-11/12 sm:w-80 w-80  bg-shark-900 mx-auto m-5 p-2">
                    <p className='text-shark-text md:text-7xl lg:text-7xl  sm:mx-auto md:mx-auto lg:mx-0 font-bold'>CineChat</p>
                    <p className='visible sm:visible md:visible lg:invisible mx-auto sm:mx-auto text-red-400 underline hover:text-blue-500 cursor-pointer'
                     onClick={usersModal} > Cinefile en ligne a finir </p>
                    <UsersModal open={isOpen} onClose={usersModal} />
                </div>
            
                <div className="rounded lg:w-11/12  md:w-11/12 sm:w-80 w-80 bg-shark-900 h-screen m-5 mx-auto ">
                    <Fakedata />
                </div>

                <div className="flex flex-col md:mx-auto sm:w-11/12 md:w-11/12 ml-20">
                    <p className='text-2xl text-red-600 '>Signalement </p>
                    <div className="flex">
                        <p className='text-2xl  mt-2'>En ligne: </p>
                        <UserIcon className='w-9 h-10 mx-3 text-red-600' />
                        <Switch checked={connected} onChange={setConnected} className={`${connected ? 'bg-blue-600' : 'bg-gray-200'} relative border border-spacing-1border-collapse border-shark-900 inline-flex h-6 w-11 mt-2 items-center rounded-full`}>
                            <span className="sr-only">Enable notifications</span>
                            <span className={`${connected ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                        </Switch>
                        <UserIcon className='w-9 h-10 mx-3  text-shark-text' />
                    </div>
                </div>

                <div className="relative mx-auto rounded lg:w-11/12 md:w-11/12 sm:w-80 w-80 h-20 m-5">
                    <button className='absolute right-10 top-4 p-2 flex items-center'>
                        <p className='border-spacing-1 border-l border-t border-b border-shark-text bg-shark-900 inline-flex p-2 rounded-l text-xl lg-align-middle'>Send</p>
                        <img className='border-r border-t border-b border-shark-text bg-shark-900 right-10 inline-flex p-2 rounded-r' src={Message} alt="Sending " />
                    </button>
                    <div className="rounded md:1w-11/12 bg-shark-900 h-20 m-10">
                        <textarea className="w-full h-full p-2 border rounded-lg resize-none"
                            name="" id="" cols="20" rows="5" placeholder='Messages'>
                        </textarea>
                    </div>
                </div>

            </div>
            <div className='hidden lg:flex flex-col bg-shark-gris lg:w-1/3 md:1/2 sm:w-0 w-0'>
                <div className='invisible sm:display-none md:visible lg:visible m-5 p-3 w-11/12 lg:w-11/12 md:1/2 sm:w-0 h-1/4  bg-shark-900'>
                    <p>profil</p>
                </div>
                <div className="flex flex-col rounded mt-10 bg-shark-900 h-2/4 ">
                    <div className="flex p-2 m-1 mx-auto border border-shark-text w-11/12">
                        <UserGroupIcon className='flex justify-center w-1/3 h-24 fill-shark-text' />
                        <p className='finvisible sm:invisible md:invisible lg:visible text-2xl md:w-0 sm:w-0  h-24 p-3 lg:w-11/12 text-center'>
                            Cinefile en ligne</p>
                    </div>
                    <Userlist />
                </div>
            </div>

        </div>
    );
};

export default Chatroom;


