import { useState, react } from 'react';
import Chatroom from '../components/chatroom/Chatroom'



const Chat = ({message, setMessage}) => {
    
    return (
        <Chatroom message={message} />
    );
};

export default Chatroom;