import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Homepage component
import ProjectsPage from "./pages/ProjectsPage";  // Projects page component

const App = () => {
  return (
    <div>
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Default homepage */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* /projects page */}
      </Routes>
    </div>
  );
};

export default App;
