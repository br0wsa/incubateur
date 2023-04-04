import React from 'react';
import Message from '../../assets/images/Message.svg';
import { useState } from "react";
import { Switch } from '@headlessui/react'
import { UserIcon, UserGroupIcon, UserRemoveIcon } from '@heroicons/react/solid';
import Userlist from './Userlist.jsx';
import UsersModal from './Listusersmodal.jsx';
import Signalements from './Signalements.jsx';
import { io } from "socket.io-client";
import { useEffect } from 'react';
import MessageList from './MessageList.jsx';

import UserService from '../../services/user.services';




const Chatroom = () => {
    //usestate modal contact 
    let [isOpen, setIsOpen] = useState(false)
    const usersModal = () => { setIsOpen(!isOpen); };

    let [openSignal, setOpenSignal] = useState(false)
    const signalModal = () => { setOpenSignal(!openSignal) }

    // bouton en ligne
    const [connected, setConnected] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState(io("http://localhost:3005", { withCredentials: true, autoConnect: false }));
    const [onlineUsers, setOnlineUsers] = useState([]);

    const [user, setUser] = useState({});

    useEffect(() => {
        UserService.getCurrentUser().then((response) => {
            setUser(response);
        });
    }, []);

    useEffect(() => {
        if (!socket.connected && connected) {
            // connecte le socket.io client
            socket.connect();

            socket.on("onlineUsers", (ids) => {
                setOnlineUsers(ids);
            });

            socket.on("disconnect", () => {
                setOnlineUsers([]);
            });

            socket.on('message', (message) => {
                setMessages((messages) => [...messages, message])
                console.log(messages);
            })
        }
        else if (socket.connected && !connected) {
            // déconnecte le socket.io client
            socket.disconnect();

        }
        // nettoyage lors de la fermeture du composant
        return () => {
            if (socket) {
                // déconnecte le socket.io client
                socket.disconnect();
            }
        };
    }, [connected]);

    const sendMessage = () => {
        setMessage("")
        socket.emit('message', message)
    };


    return (
        <div className='flex h-full'>
            {/* barre titre et users en ligne*/}
            <div className='flex-grow bg-shark-gris flex-col w-full h-full'>
                <div className=" sm:flex-col w-11/12  bg-shark-900 mx-auto m-5 p-2">
                    <p className='text-shark-text md:text-7xl lg:text-7xl  sm:mx-auto md:mx-auto lg:mx-0 font-bold'>CineChat</p>
                    {/*import  modal utilisateur en ligne */}
                    <p className='visible sm:visible md:visible lg:invisible mx-auto sm:mx-auto text-red-400 underline hover:text-blue-500 cursor-pointer'
                        onClick={usersModal} >Cinefile en ligne </p>
                    <UsersModal isOpen={isOpen} setIsOpen={setIsOpen} onlineUsers={onlineUsers} />
                </div>
                {/* chat */}
                <div className="rounded w-11/12 bg-shark-900 h-screen m-5 mx-auto overflow-auto ">
                    <MessageList messages={messages} className='m-5' />
                </div>
                {/* online & signalement  */}
                <div className="flex flex-col md:mx-auto sm:w-11/12 md:w-11/12 ml-20">
                    <p className='flex text-2xl text-red-600  hover:text-blue-500 cursor-pointer '
                        onClick={signalModal}>Signalement :
                        <UserRemoveIcon className='w-9 h-10 mx-4' />
                    </p>
                    {/* import modal signalement */}
                    <Signalements openSignal={openSignal} setOpenSignal={setOpenSignal} />
                    <div className="flex">
                        <p className='text-2xl text-black mt-2'>En ligne: </p>
                        {/* switch en ligne */}
                        <UserIcon className='w-9 h-10 mx-3 text-red-600' />
                        <Switch checked={connected} onChange={setConnected} className={`${connected ? 'bg-blue-600' : 'bg-gray-200'} relative border border-spacing-1border-collapse border-shark-900 inline-flex h-6 w-11 mt-2 items-center rounded-full`}>
                            <span className="sr-only">Enable notifications</span>
                            <span className={`${connected ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                        </Switch>
                        <UserIcon className='w-9 h-10 mx-3  text-shark-text' />
                    </div>
                </div>
                {/* texte area */}
                <div className="relative mx-auto rounded w-9/12 h-20 m-5">
                    <button className='absolute right-2 top-4 flex items-center' onClick={sendMessage}>
                        <p className='border-spacing-1 border-l border-t border-b border-shark-text bg-shark-900 inline-flex p-2 rounded-l text-xl lg-align-middle'>Send</p>
                        <img className='border-r border-t border-b border-shark-text bg-shark-900 right-10 inline-flex p-2 rounded-r' src={Message} alt="Sending " />
                    </button>
                    <div className="rounded w-full h-20 bg-white ">
                        <textarea
                            className="w-9/12 h-full p-2 resize-none border-none"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            cols="20"
                            rows="5"
                            placeholder='Messages'
                        >
                        </textarea>
                    </div>
                </div>
            </div>
            {/* profil */}
            <div className='lg:flex flex-col rounded  mx-3 bg-shark-secondary lg:w-1/3 md:1/2 sm:w-0 w-0 h-auto hidden '>
                <div className='invisible sm:display-none md:visible lg:visible mt-5 mx-3 p-3 w-11/12 h-1/4  bg-shark-900'>
                    <p>{user?.username}</p>
                    

                </div>
                {/*import  utilisateur en ligne grand ecran*/}
                <div className="flex flex-col rounded mt-10 mx-3 bg-shark-900 h-2/4 overflow-auto ">
                    <div className="flex p-2 m-1 mx-auto border border-shark-text w-11/12">
                        <UserGroupIcon className='flex justify-center w-1/3 h-24 fill-shark-text' />
                        <p className='invisible  lg:visible text-2xl md:w-0 sm:w-0  h-24 p-3 lg:w-11/12 text-center'>
                            Cinefile en ligne</p>
                    </div>
                    <Userlist onlineUsers={onlineUsers} />
                </div>
            </div>

        </div>
    );
};

export default Chatroom; 


