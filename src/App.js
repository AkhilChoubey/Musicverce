import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  light: "/light.css",
  dark: "/dark.css",
};

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
