import { Routes, Route } from "react-router-dom";
import * as React from "react"
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home/Home";

const App: React.FC = () => {

  return (
    
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register/:type" element={<Register />} />
        <Route path="registered" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
