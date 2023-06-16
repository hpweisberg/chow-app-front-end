import { Bell, BellNew } from "../../components/Icons/Icons";

const HeaderComponent = () => {
  return ( 
    <div className="flex items-center justify-between mx-4 my-2">
      <h1>Chow</h1>
      <Bell className="w-4 h-4 "/>
    </div>
   );
}
 
export default HeaderComponent;