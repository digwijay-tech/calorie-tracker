import { createContext } from "react";
type UserMealType = {
  mealType: string;
  calorie: number;
  time: string;
  protein?: number;
  fat?: number;
  carbs?: number;
};
type DataSetType = {
  showCalendar: boolean;
  date: Date;
  lastUpdatedTime: string;
  waterintake: number;
  meals: UserMealType[];

  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setLastUpdatedTime: React.Dispatch<React.SetStateAction<string>>;
  setWaterIntake: React.Dispatch<React.SetStateAction<number>>;
  setMeals: React.Dispatch<React.SetStateAction<UserMealType[] >>;
};
export const DataSetContext = createContext<DataSetType | undefined>(undefined);
