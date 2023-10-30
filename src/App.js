
import './App.css';
import { Routes, Route } from "react-router-dom";

//screens
import Home from "../src/screens/Home/Home"
import Outline from "../src/screens/OutLine/Outline"

function App() {
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outline" element={<Outline />} />
      </Routes>
    </>
  );
}
export default App;
