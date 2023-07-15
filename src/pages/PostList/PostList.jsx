import PostCardNew from "../../components/PostCardNew";
import Loading from "../Loading/Loading";

const PostList = ({ posts, profile }) => {
  if (!posts && profile) {
    console.log('asdf',posts)
    
    return <Loading />;
  }

  return (
    <main className="w-screen sm:w-auto border-x-0">
      {posts.length === 0 && <h2>Follow or add a friend to see new posts</h2>}
      {posts.map((post) => (
        <PostCardNew
          key={post._id}
          post={post}
          // last={index === posts.length - 1}
        />
      ))}
    </main>
  );
}

export default PostList;
