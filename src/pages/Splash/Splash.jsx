import { Link } from "react-router-dom";
import LoginPage from "../Login/Login";
Link

const Splash = ({ handleAuthEvt }) => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h1 className="mb-0 ">Chow</h1>
      <h3 className="opacity-70 mb-4">Phone eats first</h3>

      <div className="">
        <LoginPage handleAuthEvt={handleAuthEvt} />
        <div className="flex gap-2 items-center mt-2">
          <div className="flex-grow border-t border-black border-solid border-1 w-full"></div>
          <p className="flex justify-center text-sm">OR</p>
          <div className="flex-grow border-t border-black border-solid border-1 w-full"></div>
        </div>
        {/* <p className="flex justify-center">Log in with Google</p>
        <p className="flex justify-center opacity-70">comming soon</p> */}

        <p className="mt-6">Don't have an account? <span>
          <Link to={'/auth/signup'} className="text-blue-500">
            Sign up
          </Link>
        </span>
        </p>
      </div>
    </div>
  );
}

export default Splash;