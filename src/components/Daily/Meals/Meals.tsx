import { useContext } from "react";
import { Addition } from "../../../assets/svg/Addition";
import MealCard from "../MealCard/MealCard";
import { DataSetContext } from "../../../context/DataSetContext";

const Meals = () => {
  const CONTEXT = useContext(DataSetContext);
  if (!CONTEXT) {
    return null;
  }
  const { meals, setMeals } = CONTEXT;
  return (
    <div className="mt-5 px-4 ">
      <div className="pb-1.5 flex flex-row justify-between">
        <h1 className="text-[12px] font-medium ">Meals</h1>
        <Addition
          height="24px"
          onClick={() =>
            setMeals([
              
              { calorie: 222, time: "08:30pm", mealType: "Dinner" } , ...(meals || [])
            ])
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        {meals?.map((meal, i) => (
          <MealCard
            key={i}
            mealCalorie={meal.calorie}
            time={meal.time}
            mealType={meal.mealType}
          />
        ))}
      </div>
      <div className="mt-3 h-27"></div>
    </div>
  );
};

export default Meals;
