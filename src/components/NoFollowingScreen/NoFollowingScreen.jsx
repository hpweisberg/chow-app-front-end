// import { Search } from "../../components/Icons/Icons";
import { Search } from '../../components/Icons/Icons'
import { Link } from 'react-router-dom';

const NoFollowingScreen = () => {
  return (
    <div className="container flex justify-center align-middle mt-[45vh] gap-2">
      <Link to="/search">
        <Search className="w-12 h-12 text-black dark:text-slate-50 pb-2 hover:cursor-pointer" />
      </Link>
      <h2>To get started, follow a user to see where they've eaten.</h2>
    </div>
  );
}

export default NoFollowingScreen;