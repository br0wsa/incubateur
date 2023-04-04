import React, { useEffect, useState } from "react";
import UserService from "../../services/user.services";
import AdminServices from "../../services/admin.services";
import { Puff } from "react-loader-spinner";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isUserListLoading, setIsUserListLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsUserListLoading(true);
        const response = await UserService.getAllUsers();

        if (response) {
          setUsers(response);
          setOriginalUsers(response);
        } else {
          console.log("pas de réponse");
        }
      } catch (error) {
        console.error(error);
      }
      setIsUserListLoading(false);
    }

    fetchUsers();
  }, []);

  async function handleMuteUser(userId, isMuted) {
    var newMuteStatus = isMuted ? 0 : 1;

    try {
      setIsLoading(true);
      const response = await AdminServices.setMute(userId, newMuteStatus);

      if (response) {
        setUsers((users) =>
          users.map((user) => {
            if (user.id === userId) {
              return { ...user, is_muted: newMuteStatus };
            }
            return user;
          }),
        );
      } else {
        console.log("no response");
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  async function handleBanUser(userId, isBanned) {
    var newBanStatus = isBanned ? 0 : 1;

    try {
      setIsLoading(true);
      const response = await AdminServices.setBan(userId, newBanStatus);

      if (response) {
        setUsers((users) =>
          users.map((user) => {
            if (user.id === userId) {
              return { ...user, is_banned: newBanStatus };
            }
            return user;
          }),
        );
      } else {
        console.log("no response");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function handleNsfwUser(userId, nsfwAllowed) {
    var newNsfwStatus = nsfwAllowed ? 0 : 1;

    try {
      setIsLoading(true);
      const response = await AdminServices.setNsfw(userId, newNsfwStatus);

      if (response) {
        setUsers((users) =>
          users.map((user) => {
            if (user.id === userId) {
              return { ...user, nsfw_content_allowed: newNsfwStatus };
            }
            return user;
          }),
        );
      } else {
        console.log("no response");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredUsers = originalUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setUsers(filteredUsers);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste d'utilisateurs</h1>

      <div className="mb-4 w-1/3">
        <label htmlFor="search" className="sr-only">
          Search users
        </label>
        <input
          type="text"
          id="search"
          placeholder="Rechercher par pseudonyme"
          value={searchTerm}
          onChange={handleSearch}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex justify-center">
        {!isUserListLoading ? (
          <table className="w-full text-sm text-left dark:text-gray-400 table-fixed">
            <tbody>
              <tr bgcolor="grey">
                <th>Nom</th>
                <th>Email</th>
                <th>Pseudonyme</th>
                <th>Tel</th>
                <th>Silence</th>
                <th>Ban</th>
                <th>NSFW</th>
              </tr>
              {users.map((user) => (
                <tr bgcolor="lightgrey" key={user.id}>
                  <td className="mr-4">{user.name}</td>
                  <td className="mr-4">{user.email}</td>
                  <td className="mr-4">{user.username}</td>
                  <td className="mr-4">{user.phoneNumber}</td>
                  <td>
                    <button
                      className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${
                        isLoading ? "animate-pulse bg-gray-300" : ""
                      }`}
                      disabled={isLoading}
                      onClick={() => handleMuteUser(user.id, user.is_muted)}
                    >
                      {user.is_muted ? "Unmute" : "Mute"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${
                        isLoading ? "animate-pulse bg-gray-300" : ""
                      }`}
                      disabled={isLoading}
                      onClick={() => handleBanUser(user.id, user.is_banned)}
                    >
                      {user.is_banned ? "Débannir" : "Bannir"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${
                        isLoading ? "animate-pulse bg-gray-300" : ""
                      }`}
                      disabled={isLoading}
                      onClick={() =>
                        handleNsfwUser(user.id, user.nsfw_content_allowed)
                      }
                    >
                      {user.nsfw_content_allowed ? "Désactiver" : "Activer"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
    </div>
  );
}

export default UserList;
