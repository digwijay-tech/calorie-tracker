import { useContext } from "react";
import { useCalorieCalc } from "../../../Hooks/useCalorieCalc";
import { useMacroCalc } from "../../../Hooks/useMacroCalc";
// import { useCarbsCalc } from "../../../Hooks/useCarbsCalc";
// import { useFatCalc } from "../../../Hooks/useFatCalc";
// import { UseProtienCalc } from "../../../Hooks/UseProtienCalc";
import { useUser } from "../../../Hooks/useUser";
import { MacroContext } from "../../../context/MacroContext";

const NutrientIndicator = () => {
  const USERDETAILS = useUser();
  const DAILYCALORIES = useCalorieCalc(USERDETAILS?.profile);
  console.log(USERDETAILS?.profile);
  const DailyMacro = useContext(MacroContext);
  if (!DailyMacro) return undefined;
  const { dailyFat, dailyProtein, dailyCarbs, dailyCalorie } = DailyMacro;
  const MACRO = useMacroCalc(
    USERDETAILS?.profile.weight ?? 0,
    DAILYCALORIES ?? 0,
  );
  // const PROTEIN = UseProtienCalc(DAILYCALORIES ?? 0);
  // const FAT = useFatCalc(DAILYCALORIES ?? 0);
  // const CARBS = useCarbsCalc(DAILYCALORIES ?? 0);
  return (
    <div className="mt-3.5 px-4">
      <div className="pb-1.5">
        <h1 className="text-[12px] font-medium leading-3.5">
          Nutrients indicator
        </h1>
      </div>
      <div className="flex flex-col gap-5 bg-[#F7F7F7] px-2  py-2.5 rounded text-[12px]">
        <div className="flex  justify-between gap-2">
          <div className="flex flex-col w-full items-center">
            <div>
              {dailyProtein} / {MACRO.protein}
            </div>
            <div className="w-full px-1">
              <div className="w-full  bg-gray-300 h-1.25 rounded mb-0.5 overflow-hidden">
                <div
                  className="bg-green-500 h-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <span className="text-[14px]">Proteins</span>
          </div>
          <div className="flex flex-col w-full items-center">
            <div>
              {dailyFat} / {MACRO.fat}
            </div>
            <div className="w-full px-1">
              <div className="w-full  bg-gray-300 h-1.25 rounded mb-0.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <span className="text-[14px]">Fats</span>
          </div>
          <div className="flex flex-col w-full items-center">
            <div>
              {dailyCarbs} / {MACRO.carbs}
            </div>
            <div className="w-full px-1">
              <div className="w-full  bg-gray-300 h-1.25 rounded mb-0.5 overflow-hidden">
                <div
                  className="bg-red-500 h-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            <span className="text-[14px]">carbs</span>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <div>{dailyCalorie} / {Math.round(DAILYCALORIES ?? 0)} </div>
          <div className="w-full px-1">
            <div className="w-full  bg-gray-300 h-1.25 rounded mb-0.5 overflow-hidden">
              <div
                className="bg-green-700 h-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <span className="text-[14px]">Calories</span>
        </div>
      </div>
    </div>
  );
};

export default NutrientIndicator;
