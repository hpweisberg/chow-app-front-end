
import { Link } from "react-router-dom";
import { Bell, BellNew, Search } from "../../components/Icons/Icons";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between mx-4 my-2">
      <Link to={'/'}>
        <h1 className="text-black no-underline decoration-none">Chow</h1>
      </Link>
      <div className="flex items-center space-x-2">
        <Link to={'/search'}>
          <Search className="w-4 h-4 text-black" />
        </Link>
        <Link to={'/notifications'}>
          <Bell className="w-4 h-4 " />
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;