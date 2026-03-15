import { createContext } from "react";
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
type userDataType = {
  username: string;
  password: string;
  userDetails: userDetailsType;
  profile: userProfileType;
};

export const UserContext = createContext<userDataType | undefined>(undefined);
