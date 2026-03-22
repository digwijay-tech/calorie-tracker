import { useContext } from "react";
import { Addition } from "../../../assets/svg/Addition";
import { Substraction } from "../../../assets/svg/Substraction";
import { DataSetContext } from "../../../context/DataSetContext";

const WaterIntake = () => {
  const MAXWATERLIMIT = 3;
  const now = new Date();
  const Context = useContext(DataSetContext);
  if (!Context) {
    return null;
  }
  const { waterintake, setWaterIntake, lastUpdatedTime, setLastUpdatedTime } =
    Context;
  let waterpercentage = Math.round((waterintake / MAXWATERLIMIT) * 100);

  // function to add the value in water intake
  const AddWater = () => {
    if (waterintake === 3) {
      return;
    } else {
      setWaterIntake((prev) => prev + 0.25);
    }

    setLastUpdatedTime(now.toLocaleTimeString());
  };

  // function to decrease the value from water intake
  const RemoveWater = () => {
    if (waterintake === 0) {
      return;
    } else {
      setWaterIntake((prev) => prev - 0.25);
    }
    setLastUpdatedTime(now.toLocaleTimeString());
  };

  return (
    <div className="mt-5 px-4">
      <div className="pb-1.5">
        <h1 className="text-[12px] font-medium ">Water Intake</h1>
      </div>
      <div className="flex flex-row justify-between gap-4 bg-[#F7F7F7] p-4 rounded text-[12px]">
        <div className="flex flex-col justify-between gap-11">
          <div>
            <h2>Water</h2>
            <h3>
              <span className="text-[16px] font-medium leading-5">
                {waterintake}
              </span>
              /{MAXWATERLIMIT}L
            </h3>
          </div>
          {lastUpdatedTime == "" ? (
            <div className="h-4.5"></div>
          ) : (
            <div className="text-[#808080]">Last time {lastUpdatedTime}</div>
          )}
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col gap-6">
            <button
              className="w-6 h-6 bg-[#CCCCCC] rounded-full leading-0 text-[16px] text-[#0D1220]"
              onClick={AddWater}
            >
              <Addition height="16px" />
            </button>
            <button
              className="w-6 h-6 bg-[#CCCCCC] rounded-full leading-0 text-[16px] text-[#0D1220]"
              onClick={RemoveWater}
            >
              <Substraction />
            </button>
          </div>
          <div className="relative h-full w-10 bg-[#CCCCCC] rounded-full flex items-end overflow-hidden">
            <div
              className="w-full  bg-linear-to-b from-[#81DDFF] to-[#78ABFF] rounded-b-full"
              style={{ height: `${waterpercentage}%` }}
            ></div>
            <div className="absolute top-14.5  w-full text-center">
              {waterpercentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterIntake;
