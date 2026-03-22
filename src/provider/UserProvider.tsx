import { useEffect, useState, type ReactNode } from "react";
import { UserContext } from "../context/UserContext";
type userDetailsType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
type userProfileType = {
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
type UserMealType = {
  mealType: string;
  calorie: number;
  time: string;
  protein?: number;
  fat?: number;
  carbs?: number;
};
type userDataType = {
  username: string;
  password: string;
  userDetails: userDetailsType;
  profile: userProfileType;
  meals: UserMealType[];
};
type props = {
  children: ReactNode;
};
export const UserProvider = ({ children }: props) => {
  const [users, setUsers] = useState<userDataType[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const getUser = users.find((user) => user.username === "john123");

  return (
    <UserContext.Provider value={getUser}>{children}</UserContext.Provider>
  );
};
