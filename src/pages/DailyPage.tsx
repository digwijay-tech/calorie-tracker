import Meals from '../components/Daily/Meals/Meals'
import Navbar from '../components/Daily/Navbar/Navbar'
import NutrientIndicator from '../components/Daily/NutrientIndicator/NutrientIndicator'
import WaterIntake from '../components/Daily/WaterIntake/WaterIntake'

const DailyPage = () => {
  return (
    <div className=" w-auto min-[425px]:w-112.5 mx-auto bg-white ">
        <Navbar/>
        <NutrientIndicator/>
        <WaterIntake/>
        <Meals/>
    </div>
  )
}

export default DailyPage