type props = {
  age: number;
  gender: "male" | "female";
  height: number;
  weight: number;
  goal: "maintain" | "muscle gain" | "weight loss";
  activityLevel:
    | "sedentary"
    | "lightly active"
    | "moderately active"
    | "active"
    | "very active";
};
export const useCalorieCalc = (profile: props | undefined) => {
  if (!profile) return undefined;
  
  let tdee; // Total Daily Energy Expenditure
  const HEIGHT = profile.height;
  const WEIGHT = profile.weight;
  const AGE = profile.age;
  const GENDER = profile.gender;
  const ACTIVITYLEVEL = profile.activityLevel;
  const Goal = profile.goal;
  let basalMetabolicRate;
  let dailyCalorieNeeded;

  if (GENDER === "male") {
    basalMetabolicRate = 10 * WEIGHT + 6.25 * HEIGHT - 5 * AGE + 5;
  } else {
    basalMetabolicRate = 10 * WEIGHT + 6.25 * HEIGHT - 5 * AGE - 161;
  }

  const findDailyNeededCalorie = () => {
    switch (ACTIVITYLEVEL) {
      case "sedentary":
        tdee = basalMetabolicRate * 1.2;
        break;
      case "lightly active":
        tdee = basalMetabolicRate * 1.375;
        break;
      case "moderately active":
        tdee = basalMetabolicRate * 1.55;
        break;
      case "active":
        tdee = basalMetabolicRate * 1.725;
        break;
      case "very active":
        tdee = basalMetabolicRate * 1.9;
    }
    

    if (Goal === "maintain") {
      dailyCalorieNeeded = tdee;
    }
    if (Goal === "muscle gain") {
      dailyCalorieNeeded = tdee + 400;
    } else {
      dailyCalorieNeeded = tdee - 400;
    }
  };
  findDailyNeededCalorie();

  return dailyCalorieNeeded;
};
