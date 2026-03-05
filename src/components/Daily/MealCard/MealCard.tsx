import { ScheduleIcon } from "../../assets/svg/ScheduleIcon";
type mealCardprops ={
  mealType : String,
  mealCalorie : number,
  time :String
}
const MealCard= (props:mealCardprops ) => {
  return (
    <div className="flex flex-col justify-between gap-6 bg-[#F7F7F7] p-4 rounded text-[12px]">
      <div className="flex flex-row justify-between gap-11">
        <div>
          <h2 className="text-[14px]">{props.mealType}</h2>
        </div>

        <div>
          <span className="text-[16px] font-medium">{props.mealCalorie} Cal</span>
        </div>
      </div>
      <div className="text-[#808080] flex gap-1 ">
        <ScheduleIcon /> <span className="">{props.time}</span>
      </div>
    </div>
  );
};

export default MealCard;
