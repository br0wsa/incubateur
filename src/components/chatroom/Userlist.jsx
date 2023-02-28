import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';


const Userlist = () => {
    return (
        <div className="bg-shark-900 shadow-md rounded-lg p-4 m-2">
        <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Photo de profil" className="rounded-full mr-4"></img>
            <h2 className="font-bold ml-3 text-lg">Pseudo</h2>
            <span className="flex items-center ml-10 w-20">
                <CheckIcon className='fill-green-400 w-10' />
                {/* <CheckIcon className='fill-red-400' /> */}
             </span>
        </div>
    </div>
    );
};

export default Userlist;