import React, { createContext, useState } from "react";
import avatar from "../pages/home/componants/Dashboard/assets/avatar.svg";

const userContext = createContext();
export default userContext;

export function UserContext({ children }) {
  const [userName, setUserName] = useState("Alice");
  const [userPicture, setUserPicture] = useState(avatar);
  return (
    <userContext.Provider value={{ userName,setUserName, userPicture,setUserPicture }}>
      {children}
    </userContext.Provider>
  );
}
