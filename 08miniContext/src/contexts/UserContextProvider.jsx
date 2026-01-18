import React, { useState } from "react";
import UserContext from "./UserContext";

// 2nd step

const UserContextProvider = ({ children }) => { // children may be div,p,h1 or else

  const [user, setUser] = useState(null);
  
  return ( 
  <UserContext.Provider value={{user, setUser}}> {/* we have passed 'user' and 'setUser' to UserContext.Provider and the children */}
    {children}
  </UserContext.Provider>
  );
};

export default UserContextProvider;
