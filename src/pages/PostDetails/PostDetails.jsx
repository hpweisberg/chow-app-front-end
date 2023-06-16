import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as postService from "../../services/postService";

const PostDetails = ({ user }) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.showPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post.author || !post.author._id) {
    return null; // Handle the case when post.author is not available yet
  }

  const isAuthor = post.author._id === user.profile;

  const handleDelete = async () => {
    await postService.deletePost(id);
    // Handle the deletion (e.g., navigate to a different page)
  };

  return (
    <main>
      <article className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
        <div className="flex items-center mb-4">
          <img src={post.photo} alt={post.title} className="w-12 h-12 rounded-full" />
          <h3 className="ml-2 text-lg font-medium">{post.author.name}</h3>
        </div>
        <img src={post.photo} alt={post.title} className="w-full mb-4 rounded-lg" />
        <p className="mb-4 text-gray-700">{post.description}</p>
        <div className="flex items-center mb-4">
          <span className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded-md">{post.rating}</span>
          <h4 className="text-gray-600">{post.meal}</h4>
        </div>
        <h4 className="mb-2 text-gray-600">Restaurant: {post.restaurant}</h4>
        {isAuthor && (
          <div className="flex items-center">
            <Link
              to={{
                pathname: `/posts/${post._id}/edit`,
                state: post
              }}
              className="mr-4 text-blue-500"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-500"
            >
              Delete this post
            </button>
          </div>
        )}
      </article>
    </main>
  );
};

export default PostDetails;
