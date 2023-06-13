// css
import styles from './Landing.module.css'
import PostList from '../PostList/PostList'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {user &&
        <div>

          <h3>Post List</h3>
          <PostList />
        </div>
      }
    </main>
  )
}

export default Landing