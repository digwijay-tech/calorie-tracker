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
  gender: string;
  height: number;
  weight: number;
  goal: string;
  activityLevel: string;
};
type userDataType = {
  username: string;
  password: string;
  userDetails: userDetailsType;
  profile: userProfileType;
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
