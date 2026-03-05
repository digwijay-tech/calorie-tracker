
import { Addition } from "../../../assets/svg/Addition";
import MealCard from "../MealCard/MealCard";

const Meals = () => {
  return (
    <div className="mt-5 px-4 ">
      <div className="pb-1.5 flex flex-row justify-between">
        <h1 className="text-[12px] font-medium ">Meals</h1>
        <Addition height="24px" />
      </div>
      <div className="flex flex-col gap-3">
        <MealCard mealCalorie={342} time={"10:30 am"} mealType={"Breakfast"}/>
        <MealCard mealCalorie={532} time={"2:30 pm"} mealType={"Lunch"}/>
         <MealCard mealCalorie={132} time={"4:15 pm"} mealType={"Snacks"}/>
        <MealCard mealCalorie={667} time={"10:45pm"} mealType={"Dinner"}/>
      </div>
    </div>
  );
};

export default Meals;
