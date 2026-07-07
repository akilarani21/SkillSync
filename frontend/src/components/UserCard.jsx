import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow transition hover:shadow-lg">
      <div className="flex items-center gap-4">

        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>

          <p className="text-gray-500">
            📍 {user.location || "Unknown"}
          </p>
        </div>

      </div>

      <div className="mt-5">

        <h3 className="font-semibold text-blue-600">
          Skills Offered
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {user.skillsOffered.length ? (
            user.skillsOffered.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-400">
              No skills added
            </p>
          )}
        </div>

      </div>

      <div className="mt-5">

        <h3 className="font-semibold text-green-600">
          Skills Wanted
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {user.skillsWanted.length ? (
            user.skillsWanted.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-400">
              No skills added
            </p>
          )}
        </div>

      </div>

      <Link
        to={`/users/${user._id}`}
        className="mt-6 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        View Profile
      </Link>

    </div>
  );
};

export default UserCard;