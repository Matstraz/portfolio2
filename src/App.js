import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Homepage from "./components/pages/Homepage";
import Tools from "./components/pages/Tools";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/languages" element={<Tools />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
