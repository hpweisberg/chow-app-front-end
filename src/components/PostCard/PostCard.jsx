import { NavLink } from "react-router-dom";
import PostCardAuthorInfo from "../PostCardAuthorInfo/PostCardAuthorInfo";

const PostCard = ({ post, isLast, handleShowProfile }) => {

  const createdAt = new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className={`${isLast ? 'mb-20' : ''} w-screen sm:w-auto border-x-0"`}>
      <PostCardAuthorInfo post={post} createdAt={createdAt} handleShowProfile={handleShowProfile} />
      <NavLink to={`/posts/${post._id}`}>
        <div className={`postCardColor mb-4 overflow-hidden rounded-lg shadow-lg ${isLast ? 'mb-20' : ''}`}>
          <div className="flex">
            <div className="w-1/3 flex-shrink-0 h-32"> {/* Set a fixed width for the image container */}
              <img src={post.photo} alt="Restaurant" className="object-cover h-[full]" />
            </div>
            <div className="w-2/3 px-3 py-2"> {/* Adjusted the width for the text container */}
              <div className="">
                <div className="mb-2">
                  <h3 className="text-md font-bold mr-2 truncate">{post.restaurant?.restaurantName ? post.restaurant.restaurantName : post.meal}</h3>
                  <h2 className="text-md">{post.name}</h2>
                </div>
              </div>
              <div className="overflow-auto h-18 flex justify-between">
                <p className="overflow-hidden text-sm line-clamp-2 dark:text-dark-txt-200">{post.review}</p>
                <div className="flex items-end">

                  <p className="text-2xl font-bold text-light-accent-100 dark:text-dark-accent-100">{post.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default PostCard;
