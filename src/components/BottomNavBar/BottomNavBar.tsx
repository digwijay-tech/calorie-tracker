import { useState } from "react";
import { DailyIcon } from "../../assets/svg/DailyIcon";
import { ReportIcon } from "../../assets/svg/ReportIcon";
import { Link } from "react-router-dom";
const navItems = [
  { name: "Report", icon: ReportIcon, path: "/report" },
  { name: "Daily", icon: DailyIcon, path: "/" },
  { name: "Profile", icon: ReportIcon, path: "/profile" },
];
const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("Daily");

  return (
    <div className=" fixed px-3.25 pb-1.5 flex  bottom-0 w-full ">
      <div className="flex px-2 justify-between  bg-[#DBFBED] rounded-md min-[425px]:w-112.5 mx-auto">
        {navItems.map((item, i) => (
          <Link
            to={item.path}
            className={`cursor-pointer pt-5 px-5 pb-1.5 bg-[#DBFBED] ${activeTab === item.name ? "-translate-y-4.5 duration-200 ease-in-out rounded-t-full" : " "} `}
            onClick={() => setActiveTab(item.name)}
            key={i}
          >
            <div
              className={`flex flex-col items-center justify-center w-18 h-18  ${activeTab === item.name ? "bg-[#35CC8C] rounded-full" : ""}`}
            >
              <div>
                <item.icon
                  fill={` ${activeTab === item.name ? "#FFFFFF" : "#35CC8C"}`}
                />
              </div>
              <span
                className={` ${activeTab === item.name ? "text-[#FFFFFF]" : "text-[#35CC8C]"}`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}

        {/* <div className=" -translate-y-5 pt-4 px-4 rounded-full bg-[#DBFBED]">
          <div className="flex  flex-col p-5 w-16 h-16  items-center justify-center rounded-full  bg-[#35CC8C] ">
            <div className="">
              <DailyIcon fill="#FFFFFF" />
            </div>
            <span className="text-[#FFFFFF]">Daily</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BottomNavBar;
