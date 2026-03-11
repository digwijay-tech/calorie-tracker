import { Route, Routes } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import DailyPage from "./pages/DailyPage";
import ReportPage from "./pages/ReportPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DailyPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
      <BottomNavBar />
    </>
  );
};

export default App;
