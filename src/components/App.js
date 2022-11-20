import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Canvas from "./Canvas";
import NavBar from "./NavBar";
import Career from "./Career";
import Background from "./Background";
import More from "./More";
import FooterInfo from "./FooterInfo";
import "../styles/basics.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";

library.add(fab, fas);

const App = () => {
  const [useThemeColor, setThemeColor] = useState(true);
  const handleThemeColor = (val) => {
    setThemeColor(val);
  };

  return (
    <Router>
      <div className="globalBox background-light-grey">
        <div className="innerGlobalBox border-dark-purple">
          <Canvas useThemeColor={useThemeColor} />
          <Routes>
            <Route exact path="/" element={<NavBar />} />
            <Route exact path="/background" element={<Background />} />
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/more" element={<More />} />
          </Routes>
        </div>
        <FooterInfo
          useThemeColor={useThemeColor}
          handleTheme={handleThemeColor}
        />
      </div>
    </Router>
  );
};

export default App;
