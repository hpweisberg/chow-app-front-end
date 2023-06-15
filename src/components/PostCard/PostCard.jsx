import { Link } from "react-router-dom";
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post._id}`} className={styles.link}>
      <article>
        <header>
          <div className={styles.postCard}>
            <img src={post.photo} alt={post.title} />
            <div className={styles.postCardInfo}>
              <div className={styles.postCardInfoTop}>
                <h3>{post.resturant?.name}</h3>
                <p>{post.title}</p>
                <p>{post.meal}</p>
              </div>
              <div className={styles.postCardInfoBottom}>
                <p>Raiting: {post.rating}</p>
                <p>{post.review}</p>
                <p>{post.author && post.author.name}</p> {/* Access author's name */}
              </div>
            </div>
          </div>
        </header>
      </article>
    </Link>
  );
}

export default PostCard;

//   return (
//     <Link to={`/posts/${post._id}`} className={styles.link}>
//       <article>
//         <header>
//           <div className={styles.postCard}>
//             <img src={post.photo} alt={post.title} />
//             <div className={styles.postCardInfo}>
//               <div className={styles.postCardInfoTop}>
//                 <h3>{post.resturant?.name}</h3>
//                 <p>{post.title}</p>
//                 <p>{post.meal}</p>
//               </div>
//               <div className={styles.postCardInfoBottom}>
//                 <p>Raiting: {post.rating}</p>
//                 <p>{post.review}</p>
//                 <p>{post.author && post.author.name}</p> {/* Access author's name */}
//               </div>
//             </div>
//           </div>
//         </header>
//       </article>
//     </Link>
//   );
// }

// export default PostCard;
