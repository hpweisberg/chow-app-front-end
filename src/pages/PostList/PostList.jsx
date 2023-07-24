import PostCard from "../../components/PostCard/PostCard";
import PostCardNew from "../../components/PostCardNew";
import Loading from "../Loading/Loading";

const PostList = ({ posts, profile, handleShowProfile }) => {
  if (!posts && profile) {
    return <Loading />;
  }

  // if (!Array.isArray(posts)) {
  //   // Handle the case when posts is not an array (e.g., set a default value or display an error message)
  //   return <p>Follow your friends to see their posts.</p>;
  // }

  return (
    <main className="w-screen sm:w-auto border-x-0">
      {posts.length === 0 && <h2>Follow or add a friend to see new posts</h2>}
      {/* {posts.map((post, index) => (
        <PostCardNew
          key={post._id}
          post={post}
          isLast={index === posts.length - 1}
        />
      ))} */}
      {posts?.map((post, index) => (
        <PostCard
          key={post._id}
          post={post}
          isLast={index === posts.length - 1}
          handleShowProfile={handleShowProfile}
          className='postCard'
        />
      ))}
    </main>
  );
}

export default PostList;
