import { useEffect, useState } from "react";
import api from "../api/axios";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (keyword = "") => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get(`/users?search=${keyword}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchUsers(value);
  };

  return (
    <div className="section-container py-12">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Find Skill Partners
        </h1>

        <p className="mt-2 text-gray-500">
          Discover people who can teach you new skills.
        </p>

      </div>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
        className="input-field mb-8"
      />

      {loading ? (
        <h2 className="text-center text-xl">
          Loading users...
        </h2>
      ) : users.length === 0 ? (
        <h2 className="text-center text-gray-500">
          No users found.
        </h2>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Users;