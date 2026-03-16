import { createContext } from "react";
type MacroType ={
    dailyFat :number 
    dailyProtein :number
    dailyCarbs : number
    dailyCalorie : number
    setDailyCarbs :React.Dispatch<React.SetStateAction<number>>
    setDailyProtein : React.Dispatch<React.SetStateAction<number>>
    setDailyFat : React.Dispatch<React.SetStateAction<number>>
    setDailyCalorie : React.Dispatch<React.SetStateAction<number>>
}
export const MacroContext = createContext<MacroType | undefined>(undefined)
