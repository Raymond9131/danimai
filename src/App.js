import { Route, Routes } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/splash-screen";
import { useState } from "react";
import Home from "./pages/home";

function App() {
  const [isScreen, setScreen] = useState(true);
  setTimeout(() => {
    setScreen(false);
  }, 3000);
  return (
    <Routes>
      <Route path="/" element={isScreen ? <SplashScreen /> : <Home />} />
    </Routes>
  );
}

export default App;
