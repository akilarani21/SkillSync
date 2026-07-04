import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="section-container py-12">
      <h1 className="text-3xl font-bold mb-3">
        Welcome, {user?.name}! 👋
      </h1>

      <p className="text-gray-600 mb-8">
        This is your SkillSync Dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Profile Information
          </h2>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Skill Statistics
          </h2>

          <p>Skills Offered: 0</p>
          <p>Skills Wanted: 0</p>
          <p>Completed Swaps: 0</p>
          <p>Rating: ⭐ New User</p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-dashed p-8 text-center">
        <h3 className="text-xl font-semibold">
          🚀 Phase 3 Coming Next
        </h3>

        <p className="text-gray-500 mt-2">
          Skill Matching, Session Booking, AI Compatibility, Chat and Ratings.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;