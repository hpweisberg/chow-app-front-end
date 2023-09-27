import { Link } from "react-router-dom";
import { Bell, BellNew, Search } from "../../components/Icons/Icons";
import DarkMode from "../DarkMode/DarkMode";

const HeaderComponent = ({ handleSetFollowingPosts, handleThemeSwitch, darkEnabled }) => {
  return (
    <div className="fixed w-full h-16 top-0 z-50 bg-white dark:bg-dark-background-200 shadow ">
      <div className="container mx-auto px-4 md:max-w-2xl">
        <div className="flex items-center justify-between my-2">
          <Link to="/">
            <h1
              onClick={() => handleSetFollowingPosts()}
              className="text-black dark:text-dark-txt-100 no-underline decoration-none"
            >
              Chow
            </h1>
          </Link>
          <div className="flex items-center">

            <DarkMode handleThemeSwitch={handleThemeSwitch} darkEnabled={darkEnabled}/>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/search">
              <Search className="w-4 h-4 text-black dark:text-slate-50" />
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
