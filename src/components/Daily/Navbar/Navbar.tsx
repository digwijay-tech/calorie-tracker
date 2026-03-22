import { Link } from "react-router-dom";
import { CalenderSvg } from "../../../assets/svg/CalenderSvg";
import logo from "../../../assets/logo/logo.png";
import { useContext } from "react";
import { DataSetContext } from "../../../context/DataSetContext";

const Navbar = () => {
  const CONTEXT = useContext(DataSetContext);
  const today = new Date();
  return (
    <div className=" flex bg-gray-100">
      <div className="flex py-4 px-5 w-full justify-between flex-row ">
        <Link to="/">
          <img src={logo} alt="logo" className="h-auto w-37.5" />
        </Link>

        <button
          className="flex gap-2.5 items-center cursor-pointer"
          onClick={() => {
            CONTEXT?.setShowCalendar(!CONTEXT.showCalendar);
            console.log("clickj");
          }}
        >
          <span className="text-[14px] font-medium">
            {today.toLocaleDateString() == CONTEXT?.date.toLocaleDateString()
              ? "Today"
              : CONTEXT?.date?.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                })}
          </span>
          <CalenderSvg />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
