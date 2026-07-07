import { useState } from "react";
import api from "../api/axios";

const SwapRequestModal = ({
  isOpen,
  onClose,
  receiver,
  receiverSkills,
  mySkills,
}) => {
  const [offeredSkill, setOfferedSkill] = useState("");
  const [wantedSkill, setWantedSkill] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await api.post(
        "/swaps",
        {
          receiver,
          offeredSkill,
          wantedSkill,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      onClose();

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to send request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    import { useState } from "react";
import api from "../api/axios";

const SwapRequestModal = ({
  isOpen,
  onClose,
  receiver,
  receiverSkills,
  mySkills,
}) => {
  const [offeredSkill, setOfferedSkill] = useState("");
  const [wantedSkill, setWantedSkill] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await api.post(
        "/swaps",
        {
          receiver,
          offeredSkill,
          wantedSkill,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      onClose();

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to send request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Send Skill Swap Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Offered Skill */}
          <div>
            <label className="mb-2 block font-medium">
              Skill You Offer
            </label>

            <select
              value={offeredSkill}
              onChange={(e) => setOfferedSkill(e.target.value)}
              className="input-field"
              required
            >
              <option value="">Select a skill</option>

              {mySkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Wanted Skill */}
          <div>
            <label className="mb-2 block font-medium">
              Skill You Want
            </label>

            <select
              value={wantedSkill}
              onChange={(e) => setWantedSkill(e.target.value)}
              className="input-field"
              required
            >
              <option value="">Select a skill</option>

              {receiverSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-medium">
              Message (Optional)
            </label>

            <textarea
              rows="4"
              className="input-field"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default SwapRequestModal;
    