import { Link } from "react-router-dom";
import { Bell, BellNew, Search } from "../../components/Icons/Icons";

const HeaderComponent = ({ handleSetFriendsPosts }) => {
  return (
    <div className="fixed w-full h-16 top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between my-2">
          <Link to="/">
            <h1
              onClick={() => handleSetFriendsPosts()}
              className="text-black no-underline decoration-none"
            >
              Chow
            </h1>
          </Link>
          <div className="flex items-center space-x-2">
            <Link to="/search">
              <Search className="w-4 h-4 text-black" />
            </Link>
            <Link to="/notifications">
              <Bell className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
