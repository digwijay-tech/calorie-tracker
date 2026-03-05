import { Addition } from "../../assets/svg/Addition";
import { Substraction } from "../../assets/svg/Substraction";

const WaterIntake = () => {
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
              <span className="text-[16px] font-medium leading-5">1.5 </span>/
              2L
            </h3>
          </div>
          <div className="text-[#808080]">Last time 10:30 pm</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col gap-6">
            <button className="w-6 h-6 bg-[#CCCCCC] rounded-full leading-0 text-[16px] text-[#0D1220]">
              <Addition height="16px"/>
            </button>
            <button className="w-6 h-6 bg-[#CCCCCC] rounded-full leading-0 text-[16px] text-[#0D1220]" >
              <Substraction />
            </button>
          </div>
          <div className="h-full w-10 bg-[#CCCCCC] rounded-full flex items-end overflow-hidden">
            <div className="w-full  bg-linear-to-b from-[#81DDFF] to-[#78ABFF] rounded-b-full" style={{height:"75%"}}><div className="relative top-9.5 left-2">75%</div></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterIntake;
