import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import userServices from '../../services/user.services';

const Userlist = ({ onlineUsers }) => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setUsers([]);
        if (onlineUsers) {
        onlineUsers.map(async (id) => {
            const user = await userServices.getUser(id);
            setUsers((users) => [...users, user[0]]);
        });
        }
    }, [onlineUsers]);
    // useEffect(() => {
    //     const message = 

    return (
        <div className="bg-shark-secondary shadow-md rounded-lg p-4 m-2">
            {users.map((user) => (
                <div key={user.id}>
                    <div className="flex items-center m-2">
                        <img src="https://via.placeholder.com/50" alt="Photo de profil" className="rounded-full mr-4"></img>
                        <h2 className="font-bold ml-3 text-lg">{user.surname}</h2>
                        <span className="flex items-center ml-10 w-20">
                            <CheckIcon className='fill-green-400 w-10' />
                            {/* <CheckIcon className='fill-red-400' /> */}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Userlist;