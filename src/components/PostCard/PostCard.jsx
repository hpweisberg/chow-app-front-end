import { NavLink } from "react-router-dom";
import PostCardAuthorInfo from "../PostCardAuthorInfo/PostCardAuthorInfo";

const PostCard = ({ post, isLast }) => {
  console.log('post: ', post);

  const createdAt = new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className={`${isLast ? 'mb-20' : ''}`}>
      <PostCardAuthorInfo post={post} createdAt={createdAt} />
      <NavLink to={`/posts/${post._id}`}>
        <div className={`mb-3 overflow-hidden bg-primary-100 border rounded-lg shadow-lg ${isLast ? 'mb-20' : ''}`}>
          <div className="flex">
            <div className="w-1/3 flex-shrink-0 h-32"> {/* Set a fixed width for the image container */}
              <img src={post.photo} alt="Restaurant" className="object-cover h-full" />
            </div>
            <div className="w-2/3 p-3"> {/* Adjusted the width for the text container */}
              <div className="">
                <div className="mb-2">
                  <h3 className="text-md font-bold mr-2 bg-black truncate">{post.restaurant?.restaurantName ? post.restaurant.restaurantName : post.meal}</h3>
                  <h2 className="text-gray-700 text-md">{post.name}</h2>
                </div>
              </div>
              <div className="overflow-auto h-18 flex justify-between">
                <p className="overflow-hidden text-gray-700 line-clamp-2">{post.review}</p>
                <p className="text-2xl font-bold text-black-100 ">{post.rating}/5</p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default PostCard;
