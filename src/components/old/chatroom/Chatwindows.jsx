import { UserIcon } from '@heroicons/react/solid';
import React from 'react';
import { useState } from 'react';

const Chatwindows = ({ messages }) => {
    return (
        <div className="mx-auto bg-white w-10/12 mt-5 scroll-auto">
            <div className="chat-window m-5 mt-5 p-2 border-l-2 border-shark-900">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isSelf ? 'self' : ''} flex flex-col p-5 text-shark-secondary`}>
                        <div className="message-content p-5">
                            <div className="flex border-b-2 border-shark-900">
                                <UserIcon className='w-6 h-8 mb-2  mr-1' />
                                <p className='text-xl text-black underline'>{message.pseudo}</p>
                            </div>
                            <p className='text-xl text-black'>{message.content}</p>
                            <p className="message-timestamp text-xs text-black">{message.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chatwindows;