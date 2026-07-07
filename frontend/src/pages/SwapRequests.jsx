import { useEffect, useState } from "react";
import api from "../api/axios";
import SwapCard from "../components/SwapCard";

const SwapRequests = () => {
  const [swaps, setSwaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    fetchSwaps();
  }, []);

  const fetchSwaps = async () => {
    try {
      const token = localStorage.getItem("token");

      // Get logged-in user's profile
      const profileRes = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCurrentUserId(profileRes.data.user._id);

      // Get swap requests
      const swapRes = await api.get("/swaps", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSwaps(swapRes.data.swaps);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section-container py-20 text-center">
        Loading swap requests...
      </div>
    );
  }

  return (
    <div className="section-container py-12">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          My Skill Swap Requests
        </h1>

        <p className="mt-2 text-gray-500">
          Track all incoming and outgoing skill exchange requests.
        </p>
      </div>

      {swaps.length === 0 ? (
        <div className="rounded-xl bg-gray-100 p-10 text-center">
          <h2 className="text-xl font-semibold">
            No swap requests yet.
          </h2>

          <p className="mt-2 text-gray-500">
            Visit the Users page and send your first request.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {swaps.map((swap) => (
            <SwapCard
              key={swap._id}
              swap={swap}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default SwapRequests;