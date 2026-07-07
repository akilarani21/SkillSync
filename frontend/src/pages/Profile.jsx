import { useEffect, useState } from "react";
import api from "../api/axios";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    location: "",
    avatar: "",
  });

  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);

  const [offeredInput, setOfferedInput] = useState("");
  const [wantedInput, setWantedInput] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFormData({
        name: data.user.name || "",
        email: data.user.email || "",
        bio: data.user.bio || "",
        location: data.user.location || "",
        avatar: data.user.avatar || "",
      });

      setSkillsOffered(data.user.skillsOffered || []);
      setSkillsWanted(data.user.skillsWanted || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addSkill = (type) => {
    if (type === "offered") {
      const skill = offeredInput.trim();

      if (skill && !skillsOffered.includes(skill)) {
        setSkillsOffered([...skillsOffered, skill]);
      }

      setOfferedInput("");
    } else {
      const skill = wantedInput.trim();

      if (skill && !skillsWanted.includes(skill)) {
        setSkillsWanted([...skillsWanted, skill]);
      }

      setWantedInput("");
    }
  };

  const removeSkill = (type, skill) => {
    if (type === "offered") {
      setSkillsOffered(skillsOffered.filter((s) => s !== skill));
    } else {
      setSkillsWanted(skillsWanted.filter((s) => s !== skill));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const { data } = await api.put(
        "/profile",
        {
          name: formData.name,
          bio: formData.bio,
          location: formData.location,
          avatar: formData.avatar,
          skillsOffered,
          skillsWanted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(data.message);
    } catch (error) {
      setMessage("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <div className="section-container py-20 text-center">
        Loading Profile...
      </div>
    );
  }

  return (
        <div className="section-container py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow">

        {/* Avatar */}
        <div className="mb-8 flex flex-col items-center">
          {formData.avatar ? (
            <img
              src={formData.avatar}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
              {formData.name
                ? formData.name.charAt(0).toUpperCase()
                : "U"}
            </div>
          )}

          <h1 className="mt-4 text-3xl font-bold">
            My Profile
          </h1>
        </div>

        {message && (
          <div className="mb-6 rounded-lg bg-green-100 p-3 text-center text-green-700">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              value={formData.email}
              disabled
              className="input-field cursor-not-allowed bg-gray-100"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block font-medium">
              Bio
            </label>

            <textarea
              rows="4"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Avatar URL */}
          <div>
            <label className="mb-2 block font-medium">
              Avatar URL
            </label>

            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="input-field"
              placeholder="https://..."
            />

            {formData.avatar && (
              <img
                src={formData.avatar}
                alt="Preview"
                className="mt-4 h-24 w-24 rounded-full border object-cover"
              />
            )}
          </div>

          {/* Skills Offered */}
          <div>
            <label className="mb-2 block font-medium">
              Skills Offered
            </label>

            <div className="mb-3 flex flex-wrap gap-2">
              {skillsOffered.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700"
                >
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill("offered", skill)}
                    className="font-bold text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <input
              type="text"
              value={offeredInput}
              onChange={(e) => setOfferedInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill("offered");
                }
              }}
              className="input-field"
              placeholder="Press Enter to add a skill"
            />

            <button
              type="button"
              onClick={() => addSkill("offered")}
              className="mt-3 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add Skill
            </button>
          </div>

          {/* Skills Wanted */}
          <div>
            <label className="mb-2 block font-medium">
              Skills Wanted
            </label>

            <div className="mb-3 flex flex-wrap gap-2">
              {skillsWanted.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700"
                >
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill("wanted", skill)}
                    className="font-bold text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <input
              type="text"
              value={wantedInput}
              onChange={(e) => setWantedInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill("wanted");
                }
              }}
              className="input-field"
              placeholder="Press Enter to add a skill"
            />

            <button
              type="button"
              onClick={() => addSkill("wanted")}
              className="mt-3 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Add Skill
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Save Profile
          </button>

        </form>

      </div>
    </div>
  );
};

export default Profile;