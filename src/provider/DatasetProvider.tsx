import { useState, type ReactNode } from "react";
import { DataSetContext } from "../context/DataSetContext";
import { useUser } from "../Hooks/useUser";

type Datasetprops = {
  children: ReactNode;
};
const DatasetProvider = ({ children }: Datasetprops) => {
  const CONTEXT = useUser();
  if (!CONTEXT) {
    return null;
  }
  const [meals, setMeals] = useState(CONTEXT?.meals || []);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [waterintake, setWaterIntake] = useState(0);
  return (
    <DataSetContext.Provider
      value={{
        showCalendar,
        date,
        setShowCalendar,
        setDate,
        lastUpdatedTime,
        setLastUpdatedTime,
        waterintake,
        setWaterIntake,
        meals,
        setMeals,
      }}
    >
      {children}
    </DataSetContext.Provider>
  );
};

export default DatasetProvider;
