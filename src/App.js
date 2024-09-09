import React from "react";
import IconStashIntro from "./components/IconStashIntro";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IconsListPage from "./components/IconsListPage";

const App = () => {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<IconStashIntro />} />
          <Route path="/IconsListPage" element={<IconsListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
