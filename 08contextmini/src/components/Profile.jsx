import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <h1>Not logged in</h1>;
  return (
    <div>
      Profile:
      <h1>Profile: {user.userName}</h1>
    </div>
  );
}

export default Profile;
