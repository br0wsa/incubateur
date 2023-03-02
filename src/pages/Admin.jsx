import React, { useEffect, useState } from "react";
import UserService from "../services/user.services";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await UserService.getAllUsers();

        if (response) {
          setUsers(response);
        } else {
          console.log("pas de réponse");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();

    // const handleMuteUser = (userId) => {
    //   console.log(`User with ID ${userId} has been muted.`);
    // créer la fonction/route mute user
    // };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center">
              <p className="mr-4">{user.name}</p>
              <p className="mr-4">{user.email}</p>
              <p className="mr-4">{user.username}</p>
              <p className="mr-4">{user.phoneNumber}</p>
              <p className="mr-4">{user.is_muted ? "muted" : "Not muted"}</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                // onClick={() => handleMuteUser(user.id)}
              >
                {user.is_muted ? "Unmute" : "Mute"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
