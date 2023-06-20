import FriendRequests from "../FriendRequests/FriendRequests";

const NotificationsPage = ({user, profile}) => {
  return (
    <main>
      <h1>Notifications</h1>
      <FriendRequests user={user} profile={profile} />
    </main>
  );
}

export default NotificationsPage;