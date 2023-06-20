import { useNavigate } from "react-router-dom";
import { Back } from "../Icons/Icons";

const BackBtn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };


  return (
    <div>
      <Back onClick={handleBack} className="w-4 h-4 ml-4 mr-2" />
    </div>
  );
}

export default BackBtn;