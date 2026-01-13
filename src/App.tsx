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
import TalentOnboardingStep2 from "./pages/TalentOnboardingStep2";
import TalentOnboardingStep3 from "./pages/TalentOnboardingStep3";
import OrgSignup from "./pages/OrgSignup";
import OrgOnboarding1 from "./pages/OrgOnboarding1";
import OrgOnboarding2 from "./pages/OrgOnboarding2";
import OrgOnboarding3 from "./pages/OrgOnboarding3";
import OrgSignIn from "./pages/OrgSignIn";



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
        <Route path="/talent-onboarding-2" element={<TalentOnboardingStep2 />} />
        <Route path="/talent-onboarding-3" element={<TalentOnboardingStep3 />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/organization-signup" element={<OrgSignup />} />
        <Route path="/organization-onboarding" element={<OrgOnboarding1 />}/>
        <Route path="/organization-onboarding-2" element={<OrgOnboarding2 />} />
        <Route path="/organization-onboarding-3" element={<OrgOnboarding3 />} />
        <Route path="/organization-signin" element={<OrgSignIn />} />






        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
