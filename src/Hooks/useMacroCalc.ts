export const useMacroCalc = (weight: number, calorie: number) => {
  weight = Math.round(weight);

  let protein = Math.round(weight * 2);
  let fat = Math.round(weight * 0.9);
  let proteinCalorie = protein * 4;
  let fatCalorie = fat * 9;
  let carbs = Math.round((calorie - proteinCalorie - fatCalorie) / 4);

  return {protein , fat , carbs}
};
