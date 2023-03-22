import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import userServices from '../../services/user.services';

const Userlist = ({ socket }) => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => (async () => {
        // const users = await userServices.getAllUsers();
        // setUsers(users);
        // setLoading(false);

        if (socket) {
            
            socket.on("onlineUsers", (ids) => {
                const newUsers = [];
                console.log(ids);
                console.log(typeof ids);

                ids.forEach(id => {
                    userServices.getUser(id).then((user) => {
                        if (user){
                            newUsers.push(user[0]);
                            setUsers(newUsers);
                        }
                    });
                });
            });
        }
    })(), [socket]);
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