import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usercard from "./components/usercard.jsx";

const userData = {
  image: viteLogo,
  name: "John",
  mail: "john07@gmail.com",
  phone: 6789504856,
  address: "Chruch St. Bangalore",
};

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} userData={userData} />
      ))}
    </div>
  );
}

export default App;
