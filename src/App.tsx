import { Routes, Route } from "react-router-dom";
import * as React from "react"
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home/Home";
import { AppContextProvider, useContextInApp } from "./context/AppContext";

const App: React.FC = () => {
  const contextValues = useContextInApp();

  return (
    <AppContextProvider value={contextValues}>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/:type" element={<Register />} />
          <Route path="registered" element={<Welcome />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
