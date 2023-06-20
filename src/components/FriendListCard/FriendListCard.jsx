import AcceptRequest from "../FriendRequests/AcceptRequest";
import { Link } from "react-router-dom";

const FriendListCard = ({ requests }) => {
  if (!Array.isArray(requests)) {
    // Handle the case when requests is not an array (e.g., when there are no friend requests)
    return <div>No friend requests</div>;
  }

  return (
    <div>
      {requests.map((request) => (
        <div key={request._id} className="friendListCard">
          <Link to={`/profile/${request._id}`}>
            <img
              src={request.photo}
              alt={`${request.name}'s profile pic`}
              className="w-20 h-20 rounded-full"
            />
          </Link>
          <div className="items-start ">
            <div>
              <h1 className="mb-1">{request.name}</h1>
              <h4 className="opacity-75">@HoldForUserName</h4>
              <div>
                <AcceptRequest request={request._id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendListCard;
