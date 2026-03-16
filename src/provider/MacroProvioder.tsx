import { useState, type ReactNode } from "react";
import { MacroContext } from "../context/MacroContext";
type props = {
  children: ReactNode;
};
const MacroProvioder = ({ children }: props) => {
  const [dailyFat, setDailyFat] = useState(0);
  const [dailyProtein, setDailyProtein] = useState(0);
  const [dailyCarbs, setDailyCarbs] = useState(0);
  const [dailyCalorie, setDailyCalorie] = useState(0);

  return (
    <MacroContext.Provider
      value={{ dailyFat, dailyProtein, dailyCarbs, dailyCalorie , setDailyCarbs, setDailyFat, setDailyProtein, setDailyCalorie }}
    >
      {children}
    </MacroContext.Provider>
  );
};

export default MacroProvioder;
