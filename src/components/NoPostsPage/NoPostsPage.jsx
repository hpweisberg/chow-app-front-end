import { Link } from 'react-router-dom';
import { NewPost } from '../../components/Icons/Icons'

const NoPostsPage = ({ isOwner }) => {
  return (
    <div className="container flex justify-center align-middle mt-[10vh] gap-2">
      {isOwner &&
        <>
          <Link to="/posts/new">
            <NewPost className="w-12 h-12 text-black dark:text-slate-50 hover:cursor-pointer" />
          </Link>
          <h2>No meals have been posted. Select the add
            button to get started.</h2>
        </>
      }

      {!isOwner &&
        <h2>User has not posted a meal.</h2>
      }

    </div>
  );
}

export default NoPostsPage;