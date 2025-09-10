import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile(useContext) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;