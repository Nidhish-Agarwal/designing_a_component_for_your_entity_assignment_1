// write the component code here
import React from "react";

function usercard({ userData }) {
  return (
    <div>
      <img src={userData.image} alt="Profile photo" />
      <p>Name: {userData.name}</p>
      <p>Mail: {userData.mail}</p>
      <p>Phone Number: {userData.phone}</p>
      <p>Address: {userData.address}</p>
    </div>
  );
}

export default usercard;
