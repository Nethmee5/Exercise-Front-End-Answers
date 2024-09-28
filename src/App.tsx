import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Calculator from "./pages/answers/Calculator";
import Navbar from "./pages/answers/Navbar";
import Question3 from "./pages/answers/Question3";

const NavigationButtons: React.FC = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <button onClick={() => Navigate("/")}>Go to Calculator</button>
      <button onClick={() => Navigate("/Navbar")}>Go to Navbar</button>
      <button onClick={() => Navigate("/Question3")}>Go to Question3</button>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <NavigationButtons />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="Question3" element={<Question3 />} />
      </Routes>
    </Router>
  );
};

export default App;
