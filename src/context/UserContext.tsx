import { createContext } from "react";
type userDetailsType ={
    id : number
    name : string
    email : string
    phone : string
}
type userProfileType ={
    age : number 
    gender : string
    height : number 
    weight : number 
    goal : string 
    activityLevel : string 
}
type userDataType ={
    username : string
    password : string
    userDetails : userDetailsType
    profile : userProfileType 
}

export const UserContext = createContext<userDataType|undefined>(undefined)