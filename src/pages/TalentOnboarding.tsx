import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../auth.css";

function TalentOnboarding() {
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const domains = [
    "UI developer",
    "Java developer",
    "Vibe coding",
    "AI",
    "Business development",
    "Graphic design",
    "Product management",
    "Data analytics",
  ];

  return (
    <div className="auth-wrapper">
<<<<<<< HEAD
=======

>>>>>>> 92cdc8477b495a8d2ab43e5cf37cd321682f0c71
      {/* TOP BAR */}
      <div className="auth-logo">
        <img src="/logo.svg" alt="Predulive" />
      </div>
<<<<<<< HEAD

      <div className="auth-top-right">
        <button
          className="top-action"
          onClick={() => navigate("/organization-signup")}
        >
          Sign in as Organization
        </button>

        <button
          className="top-action"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </div>
=======
<div className="auth-top-right">
  <button
    className="top-action"
    onClick={() => navigate("/organization-signup")}
  >
    Sign in as Organization
  </button>

  <button
    className="top-action"
    onClick={() => navigate("/login")}
  >
    Sign in
  </button>
</div>


>>>>>>> 92cdc8477b495a8d2ab43e5cf37cd321682f0c71

      {/* HERO */}
      <div className="auth-hero onboarding-hero">
        <h2 className="auth-hero-title">Talent Onboarding</h2>

        <p className="auth-hero-subtitle">
          Let’s personalize your opportunity matches
        </p>

        <p className="auth-hero-helper">
          You can edit this information anytime
        </p>

<<<<<<< HEAD
        {/* STEP INDICATOR — FIXED (CIRCLES ONLY) */}
        <div className="onboarding-steps">
          <span className="step active">
            <span className="step-circle active">1</span>
            Goals & Interests
          </span>

          <span className="arrow">→</span>

          <span className="step upcoming">
            <span className="step-circle upcoming">2</span>
            Background
          </span>

          <span className="arrow">→</span>

          <span className="step upcoming">
            <span className="step-circle upcoming">3</span>
            Work Style
          </span>
=======
        {/* STEP INDICATOR */}
        <div className="onboarding-steps">
          <span className="active-step">① Goals & Interests</span>
          <span className="step-arrow">→</span>
          <span>② Background</span>
          <span className="step-arrow">→</span>
          <span>③ Work Style</span>
>>>>>>> 92cdc8477b495a8d2ab43e5cf37cd321682f0c71
        </div>
      </div>

      {/* WHITE FORM CARD */}
      <div className="onboarding-card">
<<<<<<< HEAD
=======

>>>>>>> 92cdc8477b495a8d2ab43e5cf37cd321682f0c71
        {/* SECTION 1 */}
        <div className="form-section">
          <p className="form-title">What’s your focus right now?*</p>
          <label className="checkbox-row">
            <input type="checkbox" /> Earn
          </label>
          <label className="checkbox-row">
            <input type="checkbox" /> Gain experience
          </label>
          <label className="checkbox-row">
            <input type="checkbox" /> Explore
          </label>
        </div>

        {/* SECTION 2 */}
        <div className="form-section">
          <p className="form-title">What domains are you interested in?*</p>

          <div className="pill-group">
            {domains.map((domain) => (
              <span
                key={domain}
                className={`pill ${
                  selectedDomains.includes(domain) ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedDomains((prev) =>
                    prev.includes(domain)
                      ? prev.filter((d) => d !== domain)
                      : [...prev, domain]
                  )
                }
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="form-section">
          <p className="form-title">
            How much time can you commit per week?*
          </p>
          <div className="two-col">
            <label><input type="radio" name="time" /> 2–4 hrs</label>
            <label><input type="radio" name="time" /> 5–10 hrs</label>
            <label><input type="radio" name="time" /> 10–15 hrs</label>
            <label><input type="radio" name="time" /> 20+ hrs</label>
            <label><input type="radio" name="time" /> 40 hrs</label>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="form-section">
          <p className="form-title">
            What opportunities are you open to?*
          </p>
          <div className="two-col">
            <label><input type="checkbox" /> Projects</label>
            <label><input type="checkbox" /> Internship</label>
            <label><input type="checkbox" /> Research</label>
            <label><input type="checkbox" /> Contract roles</label>
            <label><input type="checkbox" /> Part‑time roles</label>
            <label><input type="checkbox" /> Full‑time roles</label>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="card-actions">
<<<<<<< HEAD
          <button
            className="back-btn"
            onClick={() => navigate("/login")}
          >
            Back
          </button>

          <button
            className="next-btn"
            onClick={() => navigate("/talent-onboarding-2")}
          >
            Save & Next
          </button>
        </div>
=======
  <button
    className="back-btn"
    onClick={() => navigate("/login")}
  >
    Back
  </button>

  <button
    className="next-btn"
    onClick={() => navigate("/talent-onboarding-2")}
  >
    Save & Next
  </button>
</div>


>>>>>>> 92cdc8477b495a8d2ab43e5cf37cd321682f0c71
      </div>
    </div>
  );
}

export default TalentOnboarding;
