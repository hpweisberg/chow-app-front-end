import { NavLink } from "react-router-dom";

const PostCardNew = ({ post }) => {
  console.log('post: ', post)

  return (
    <NavLink to={`/posts/${post._id}`}>
      <div className="mb-1 overflow-hidden bg-white border rounded-lg shadow-lg max-h-48">
        <div className="flex">
          <div className="w-1/4">
            <img src={post.photo} alt="Restaurant" className="object-cover h-full " />
          </div>
          <div className="w-3/4 p-4">
            <div className="flex justify-between">
              <div className="mb-2">
                <h3 className="text-md font-bold">{post.restaurant?.restaurantName ? post.restaurant?.restaurantName : 'No restaurant name'}</h3>
                <p className="text-gray-700">{post.name}</p>
              </div>
              {/* <p className="text-gray-700">{post}</p> */}
              {/* <p className="text-sm">{post.author.name}</p> */}
              {post.author?.photo && <img src={post.author.photo} alt="" className="w-6 h-6 rounded-2xl" />}
            </div>
            <div className="overflow-auto h-18">
              <p className="text-gray-700">{post.meal}</p>
              <p className="text-lg font-bold">{post.rating}/5</p>
              <p className="overflow-hidden text-gray-700 line-clamp-2">{post.review}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default PostCardNew;