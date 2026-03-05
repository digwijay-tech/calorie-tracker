import { Link } from "react-router-dom";
import { CalenderSvg } from "../../../assets/svg/CalenderSvg";
import logo from "../../assets/logo/logo.png"
const Navbar = () => {
  return (
    <div className="flex py-4 bg-gray-100">
      <div className="flex px-5 w-full justify-between flex-row ">
        {/* <Link className="flex items-center  gap-2" to="/Profile">
          <div className="w-8 h-8 ">
            <img src="/logo.png" alt="logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <span className="leading-none">Sunju</span>
        </Link> */}
        <Link to='/'>
        <img src={logo} alt="logo" className="h-auto w-37.5"/>
        </Link>

        <Link className="flex gap-2.5 items-center" to="/helo">
          <span className="text-[14px]">Today</span>
          <CalenderSvg />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
