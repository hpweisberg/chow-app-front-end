
import { Link } from "react-router-dom";
import { Bell, BellNew } from "../../components/Icons/Icons";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between mx-4 my-2">
      <Link to={'/'}>
        <h1 className="text-black no-underline decoration-none">Chow</h1>
      </Link>
      <Bell className="w-4 h-4 " />
    </div>
  );
}

export default HeaderComponent;