import { Link } from "react-router-dom";

// Components

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`}>
      <article className="post-card">
        <header>
          <span>
            <h1>{post.title}</h1>
          </span>
        </header>
      </article>
    </Link>
  );
}

export default PostCard;