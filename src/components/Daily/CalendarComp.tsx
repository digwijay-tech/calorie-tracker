import { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DataSetContext } from "../../context/DataSetContext";

const CalendarComp = () => {
    const CONTEXT = useContext(DataSetContext)
    if(!CONTEXT){return null}
    return (
    <>
      {CONTEXT.showCalendar && (
        <div className="absolute z-10 w-full h-full bg-black/40 top-0 ">
          <div className="flex h-full justify-center items-center [&_.react-calendar__tile]:rounded-full">
            <Calendar
              onChange={(value) => {
                CONTEXT.setDate(value as Date);
                CONTEXT.setShowCalendar(false);
              }}
              value={CONTEXT.date}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarComp;
