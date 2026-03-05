import { useState } from "react";
import { DailyIcon } from "../../assets/svg/DailyIcon";
import { ReportIcon } from "../../assets/svg/ReportIcon";
const navItems = [
  { name: "Report", icon: ReportIcon, path: "/report" },
  { name: "Daily", icon: DailyIcon, path: "/daily" },
  { name: "Profile", icon: ReportIcon, path: "/profile" },
];
const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("Daily");

  return (
    <div className=" fixed px-3.25 pb-1.5 bg-white bottom-0 w-full min-[425px]:w-112.5">
      <div className="flex px-5 justify-between  bg-[#DBFBED] rounded-md">
        {navItems.map((item, i) => (
          <button className={ ` p-5 bg-[#DBFBED] ${activeTab === item.name?"-translate-y-4.5 duration-200 ease-in-out rounded-t-full":""} ` } onClick={()=>setActiveTab(item.name)} key={i}>
            <div className={`flex flex-col items-center justify-center ${activeTab === item.name?"bg-[#35CC8C] w-18 h-18 rounded-full":""}`}>
              <div>
                <item.icon fill={` ${activeTab === item.name?"#FFFFFF":"#35CC8C"}`} />
              </div>
              <span className={` ${activeTab === item.name?"text-[#FFFFFF]":"text-[#35CC8C]"}`}>{item.name}</span>
            </div>
          </button>
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
