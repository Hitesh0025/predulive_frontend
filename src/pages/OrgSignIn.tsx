import { Link } from "react-router-dom";
import "../auth.css";

function OrgSignIn() {
  return (
    <div className="auth-wrapper">
      {/* LOGO */}
      <div className="auth-logo">
        <img src="/logo.svg" alt="Predulive" />
      </div>

      {/* TOP RIGHT LINKS */}
      <div className="auth-top-right">
        <Link to="/signup" className="top-action">
          Sign up as Talent
        </Link>
        <Link to="/login" className="top-action">
          Sign in
        </Link>
      </div>

      {/* HERO */}
      <div className="auth-hero">
        <h2 className="auth-hero-title">Welcome!</h2>
        <p className="auth-hero-subtitle">Sign‑In as Organization</p>
        <p className="auth-hero-helper">
          Post opportunities and discover reliable talent.
        </p>
      </div>

      {/* WHITE CARD */}
      <div className="auth-card">
        <p className="sign-in-title">Sign In With</p>

        {/* SOCIAL LOGIN */}
        <div className="social-login">
          <div className="social-btn">
            <img src="/facebook.png" alt="facebook" />
          </div>
          <div className="social-btn">
            <img src="/apple.png" alt="apple" />
          </div>
          <div className="social-btn">
            <img src="/google.png" alt="google" />
          </div>
        </div>




        <p className="or-text">or</p>

        {/* FORM */}
        <input
          className="auth-input"
          placeholder="Work email*"
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password*"
        />

        <div className="remember-row">
  <label className="remember-toggle-row">
    <input type="checkbox" className="toggle-input" />
    <span className="toggle-switch"></span>
    <span className="toggle-text">Remember me</span>
  </label>

  <span className="forgot-link">
    Forgot password? <span className="reset-link">Reset</span>
  </span>
</div>


        <button className="auth-button">Sign In</button>

        <p className="auth-text">
          Don’t have an account?{" "}
          <Link to="/organization-signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default OrgSignIn;
