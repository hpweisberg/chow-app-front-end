import AcceptRequest from "../FriendRequests/AcceptRequest";
import RejectRequest from "../FriendRequests/RejectRequest";
import { Link } from "react-router-dom";

const FriendListCard = ({ requests }) => {
  if (!Array.isArray(requests)) {
    // Handle the case when requests is not an array (e.g., when there are no friend requests)
    return <div>No follow requests</div>;
  }

  return (
    <div>
      {requests.map((request) => (
        <Link to={`/${request.handle}`} key={request._id}>
            <div className="friendListCard">
            <img
              src={request.photo}
              alt={`${request.name}'s profile pic`}
              className="w-20 h-20 rounded-full"
            />

            <p className="mb-1">{request.handle} has requested to follow you.</p>
        </div>
          </Link>
      ))}
    </div>
  );
};

export default FriendListCard;
