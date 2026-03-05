import { Route, Routes } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import DailyPage from "./pages/DailyPage";

const App = () => {
  return (
    <div className="bg-gray-200">
      <Routes>
        <Route path="/" element={<DailyPage />} />
      </Routes>
      <BottomNavBar />
    </div>
  );
};

export default App;
