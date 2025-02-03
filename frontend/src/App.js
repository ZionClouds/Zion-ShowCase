// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Homepage component
import ProjectsPage from "./pages/ProjectsPage";  // Projects page component
import Login from "./components/LoginPage";  // Login page component
import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const App = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch(e => console.error(e));
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <Router>
      <AuthenticatedTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Default homepage */}
          <Route path="/projects" element={<ProjectsPage />} /> {/* /projects page */}
        </Routes>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </Router>
  );  
};

export default App;

