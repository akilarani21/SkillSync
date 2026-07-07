const statusColor = {
  Pending: "bg-yellow-100 text-yellow-700",
  Accepted: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const SwapCard = ({ swap, currentUserId }) => {
  const isSender = swap.sender._id === currentUserId;

  const otherUser = isSender ? swap.receiver : swap.sender;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center gap-4">

        {otherUser.avatar ? (
          <img
            src={otherUser.avatar}
            alt={otherUser.name}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            {otherUser.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold">
            {otherUser.name}
          </h2>

          <p className="text-gray-500">
            {isSender ? "You sent this request" : "Sent you a request"}
          </p>
        </div>

      </div>

      <div className="mt-6">

        <div className="rounded-lg bg-gray-50 p-4">

          <p>
            <strong>Offering:</strong> {swap.offeredSkill}
          </p>

          <p className="mt-2">
            <strong>Requesting:</strong> {swap.wantedSkill}
          </p>

          {swap.message && (
            <p className="mt-3 italic text-gray-600">
              "{swap.message}"
            </p>
          )}

        </div>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            statusColor[swap.status]
          }`}
        >
          {swap.status}
        </span>

        <span className="text-sm text-gray-500">
          {new Date(swap.createdAt).toLocaleDateString()}
        </span>

      </div>

    </div>
  );
};

export default SwapCard;