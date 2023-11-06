import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
