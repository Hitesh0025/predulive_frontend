import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectRole from "./pages/SelectRole";
import TalentDashboard from "./pages/TalentDashboard";
import OrgDashboard from "./pages/OrgDashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TalentOnboarding from "./pages/TalentOnboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-role" element={<SelectRole />} />

        <Route path="/talent" element={<TalentDashboard />} />
        <Route path="/organization" element={<OrgDashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/TalentOnboarding" element={<TalentOnboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
