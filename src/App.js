import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Home from "./Components/home/Home";

const themes = {
  light: "/light.css",
  dark: "/dark.css",
};

function App() {
  return (
    <div className="App">
      <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </ThemeSwitcherProvider>
    </div>
  );
}

export default App;
