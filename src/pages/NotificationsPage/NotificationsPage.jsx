import FriendRequests from "../FriendRequests/FriendRequests";
import FollowRequests from "../../components/FollowRequests/FollowRequests";

const NotificationsPage = ({ user, profile }) => {
  return (
    <main className="mt-20">
      {/* <h1>Notifications</h1> */}
      <div>
        {/* <FriendRequests user={user} profile={profile} /> */}
        <FollowRequests user={user} profile={profile} />
      </div>
    </main>
  );
}

export default NotificationsPage;