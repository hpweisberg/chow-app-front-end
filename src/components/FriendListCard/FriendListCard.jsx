const FriendListCard = ({ requests }) => {
  console.log('FLC: ', requests)
  return (
    <div>
      {requests.map(request => (
        <div key={request._id} className="friendListCard">
          <img src={request.photo} alt={`${request.name}'s profile pic`} className="w-20 h-20 rounded-full" />
          <div className="items-start border-2">
            <div>
              <h1 className="mb-1">{request.name}</h1>
              <h4 className="opacity-75">@HoldForUserName</h4>
              <div>
                <button className="ml-0 bg-green-700 friendRequestBtn">Accecpt</button>
                <button className="bg-red-700 friendRequestBtn">Decline</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendListCard;