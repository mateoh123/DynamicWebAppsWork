import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
