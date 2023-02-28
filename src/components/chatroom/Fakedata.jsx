// MainPage.js
import React, { useState } from 'react';
import ChatWindow from './Chatwindows';

const Fakedata = () => {
    const [messages, setMessages] = useState([
        {
            pseudo: "allane",
            content: "Salut, comment vas-tu ?",
            timestamp: "2022-02-27T10:30:00.000Z",
            isSelf: false
        },
        {
            pseudo: "iliane",
            content: "Je vais bien, merci ! Et toi ?",
            timestamp: "2022-02-27T10:31:00.000Z",
            isSelf: true
        },
        {
            pseudo :"allane",
            content: "Je vais bien aussi, merci.",
            timestamp: "2022-02-27T10:32:00.000Z",
            isSelf: false
        }
    ]);

    return (
        
            <ChatWindow className='m-5 p-5 main-page flex justify-center bg-slate-400 w-10/12 mt-5' messages={messages} />
       
    );
};

export default Fakedata;
