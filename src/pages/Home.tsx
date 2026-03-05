import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import Meals from '../components/Meals/Meals'
import Navbar from '../components/Navbar/Navbar'
import NutrientIndicator from '../components/NutrientIndicator/NutrientIndicator'
import WaterIntake from '../components/WaterIntake/WaterIntake'

const Home = () => {
  return (
    <div className=" w-auto min-[425px]:w-112.5 mx-auto bg-white ">
        <Navbar/>
        <NutrientIndicator/>
        <WaterIntake/>
        <Meals/>
        <BottomNavBar/>
    </div>
  )
}

export default Home