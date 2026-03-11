type props = {
  age: number;
  gender: string;
  height: number;
  weight: number;
  goal: string;
  activityLevel: string;
};
export const useBMR = (profile: props|undefined) => {
  if (!profile) return undefined;
  
  const HEIGHT = profile.height;
  const WEIGHT = profile.weight;
  const AGE = profile.age;
  const GENDER = profile.gender;
  const ACTIVITYLEVEL = profile.activityLevel;
  let basalMetabolicRate;
  let dailyCalorieNeeded;

  if (GENDER === "male") {
    basalMetabolicRate = 10 * WEIGHT + 6.25 * HEIGHT - 5 * AGE + 5;
  } else {
    basalMetabolicRate = 10 * WEIGHT + 6.25 * HEIGHT - 5 * AGE - 161;
  }

  const findDailyNeededCalorie = () => {
    switch (ACTIVITYLEVEL) {
      case "Sedentary":
        dailyCalorieNeeded = basalMetabolicRate * 1.2;
        break;
      case "Lightly active":
        dailyCalorieNeeded = basalMetabolicRate * 1.375;
        break;
      case "Moderately active":
        dailyCalorieNeeded = basalMetabolicRate * 1.55;
        break;
      case "Active":
        dailyCalorieNeeded = basalMetabolicRate * 1.725;
        break;
      case "Very active":
        dailyCalorieNeeded = basalMetabolicRate * 1.9;
    }
  };
  findDailyNeededCalorie();
  return dailyCalorieNeeded;
};
