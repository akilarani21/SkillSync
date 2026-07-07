import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

const PublicProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mySkills, setMySkills] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      // Fetch public user's profile
      const { data } = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data.user);

      // Fetch logged-in user's profile
      const profileRes = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMySkills(profileRes.data.user.skillsOffered || []);

      // Debug
      console.log("Logged-in User:", profileRes.data.user);
      console.log("My Skills:", profileRes.data.user.skillsOffered);

    } catch (error) {
      console.error("Fetch Profile Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwapRequest = async () => {
    try {
      const token = localStorage.getItem("token");

      if (mySkills.length === 0) {
        return alert("Please add at least one skill to your profile.");
      }

      if (!user.skillsOffered || user.skillsOffered.length === 0) {
        return alert("This user hasn't added any skills yet.");
      }

      const { data } = await api.post(
        "/swaps",
        {
          receiver: user._id,
          offeredSkill: mySkills[0],
          wantedSkill: user.skillsOffered[0],
          message: "I'd like to exchange skills with you!",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to send swap request."
      );
    }
  };

  if (loading) {
    return (
      <div className="section-container py-20 text-center">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="section-container py-20 text-center">
        User not found.
      </div>
    );
  }

  return (
    <div className="section-container py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow">

        {/* Header */}
        <div className="flex flex-col items-center">

          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-36 w-36 rounded-full border-4 border-blue-500 object-cover"
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}

          <h1 className="mt-5 text-4xl font-bold">
            {user.name}
          </h1>

          <p className="mt-2 text-gray-500">
            📍 {user.location || "Location not added"}
          </p>

        </div>

        {/* Bio */}
        <div className="mt-10">

          <h2 className="mb-3 text-xl font-bold">
            About
          </h2>

          <div className="rounded-xl bg-gray-50 p-5">
            <p className="leading-7 text-gray-700">
              {user.bio || "No bio available."}
            </p>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <div>

            <h2 className="mb-4 text-xl font-bold text-blue-600">
              Skills Offered
            </h2>

            <div className="flex flex-wrap gap-2">

              {user.skillsOffered?.length ? (
                user.skillsOffered.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">
                  No skills added.
                </p>
              )}

            </div>

          </div>

          <div>

            <h2 className="mb-4 text-xl font-bold text-green-600">
              Skills Wanted
            </h2>

            <div className="flex flex-wrap gap-2">

              {user.skillsWanted?.length ? (
                user.skillsWanted.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-green-100 px-4 py-2 text-green-700"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">
                  No skills added.
                </p>
              )}

            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button
            onClick={handleSwapRequest}
            className="flex-1 rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            🤝 Request Skill Swap
          </button>

          <Link
            to="/users"
            className="flex-1 rounded-lg border border-gray-300 py-3 text-center text-lg font-semibold transition hover:bg-gray-100"
          >
            ← Back to Users
          </Link>

        </div>

      </div>
    </div>
  );
};

export default PublicProfile;