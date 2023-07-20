import FriendRequests from "../FriendRequests/FriendRequests";

const NotificationsPage = ({ user, profile }) => {
  return (
    <main>
      <h1>Notifications</h1>
      <div>
        <FriendRequests user={user} profile={profile} />
      </div>
    </main>
  );
}

export default NotificationsPage;