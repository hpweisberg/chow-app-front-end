import { NavLink } from "react-router-dom";
import PostCardAuthorInfo from "../PostCardAuthorInfo/PostCardAuthorInfo";

const PostCard = ({ post, isLast }) => {
  console.log('post: ', post);

  const createdAt = new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className={`${isLast ? 'mb-20' : ''}`}>
      <PostCardAuthorInfo post={post} createdAt={createdAt} />
      <NavLink to={`/posts/${post._id}`}>
        <div className={`mb-3 overflow-hidden bg-primary-100 border rounded-lg shadow-lg max-h-48 ${isLast ? 'mb-20' : ''}`}>
          <div className="flex">
            <div className="w-1/4">
              <img src={post.photo} alt="Restaurant" className="object-cover h-full" />
            </div>
            <div className="w-5/6 p-3">
              <div className="">
                <div className="mb-2">
                  <div className="flex justify-between ">
                    <h3 className="text-lg font-bold mr-2 ">{post.restaurant?.restaurantName ? post.restaurant.restaurantName : post.meal}</h3>
                    <p className="text-2xl font-bold text-black-100 ">{post.rating}/5</p>
                  </div>
                  <p className="text-gray-700 text-md">{post.name}</p>
                </div>
              </div>
              <div className="overflow-auto h-18">
                <p className="overflow-hidden text-gray-700 line-clamp-2">{post.review}</p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default PostCard;
