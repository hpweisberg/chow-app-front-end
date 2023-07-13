import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as postService from "../../services/postService";
import { Back } from "../../components/Icons/Icons";

const PostDetails = ({ user, handleShowProfile }) => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log('id:', id)
  // console.log('post:', post.author.photo)


  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.showPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  // console.log('post:', post)




  // if (!post.author || !post.author.handle) {
  //   return null; // Handle the case when post.author is not available yet
  // }

  const isAuthor = user && post.author && user.handle === post.author.handle;
  // console.log('isAuthor:', isAuthor)

  // const handleLike = async () => {

  const handleDelete = async () => {
    await postService.deletePost(id);
    navigate("/");
    // Handle the deletion (e.g., navigate to a different page)
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (

    // <div>test</div>
    <main>
      <div className="flex items-center mb-4 mt-20">
        <Back onClick={handleBack} className="w-4 h-4 ml-4 mr-2" />
        {post.author && (

          <Link to={`/${post.author.handle}`} onClick={() => handleShowProfile(post.author)}>
            <img src={post.author?.photo} alt={post?.title} className="w-12 h-12 rounded-full" />
            <h3 className="ml-2 text-lg font-medium text-center">{post.author?.name}</h3>
          </Link>
        )}
      </div>
      <article className="max-w-lg p-4 pt-1 mx-auto bg-white rounded-lg shadow-lg mb-20">
        <img src={post.photo} alt={post.title} className="w-full mb-4 rounded-lg" />
        <h2 className="mb-1 text-2xl font-bold">{post.title}</h2>
        <h4 className="mb-4 text-gray-600">Restaurant: {post.restaurant?.restaurantName}</h4>

        <p className="mb-4 text-gray-700">{post.description}</p>
        <div className="flex items-center mb-4">
          <span className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded-md">{post.rating}</span>
          <h4 className="text-gray-600">{post.meal}</h4>
        </div>
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
            <button onClick={handleDelete} className="text-red-500">
              Delete this post
            </button>
          </div>
        )}
      </article>
    </main>
  );
};

export default PostDetails;
