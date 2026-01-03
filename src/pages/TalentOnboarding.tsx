import "../auth.css";

function TalentOnboarding() {
  return (
    <div className="auth-wrapper">
      
      {/* TOP BAR */}
      <div className="auth-logo">
        <img src="/logo.svg" alt="Predulive" />
      </div>

      <div className="auth-top-right">
        <span className="top-action">Sign up as Organization</span>
        <span className="top-action">Sign in</span>
      </div>

      {/* HERO */}
      <div className="auth-hero">
        <h2 className="auth-hero-title">Talent Onboarding</h2>
        <p className="auth-hero-desc">
          Let’s personalize your opportunity matches
        </p>
      </div>

      {/* WHITE FORM CARD */}
      <div className="onboarding-card">
        STEP 1 FORM GOES HERE
      </div>

    </div>
  );
}

export default TalentOnboarding;
