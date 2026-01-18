import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext); // we have passed user, setUser to the UserContext by UserContext.Provider so we have access of user and setUser

  if (!user) return <div>Please login</div>;
  return <div>Welcome {user.username} </div>;
};

export default Profile;
