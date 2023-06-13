import { Link } from "react-router-dom";
import styles from './PostCard.module.css'

// Components

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`}>
      <article className="post-card">
        <header>
          <span>
            <h1>{post.title}</h1>
            <img src={post.photo} alt={post.title} />
            <h3>{post.resturant?.name}</h3>
            <h3>{post.title}</h3>
            <h3>{post.meal}</h3>
            <h3>{post.rating}</h3>
            <h3>{post.review}</h3>
          </span>
        </header>
      </article>
    </Link>
  );
}

export default PostCard;