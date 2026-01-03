import { Link } from "react-router-dom";
import { useState } from "react";
import "../auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="auth-wrapper">
      {/* TOP LEFT LOGO */}
      <div className="auth-logo">
        <img src="/logo.svg" alt="Predulive logo" />
      </div>

      {/* TOP RIGHT ACTIONS */}
      <div className="auth-top-right">
        <Link to="/organization-signup" className="top-action">
          Sign up as Organization
        </Link>
        <Link to="/login" className="top-action">
          Sign in
        </Link>
      </div>

      {/* HERO TEXT */}
      <div className="auth-hero">
        <h2 className="auth-hero-title">Welcome!</h2>
        <p className="auth-hero-subtitle">Sign‑up as a Talent</p>
        <p className="auth-hero-desc">
          Build proof‑of‑work and get matched.
        </p>
      </div>

      {/* WHITE CARD */}
      <div className="auth-card">
        <h3 className="sign-in-title">Register with</h3>

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

        <div className="or-text">or</div>

        {/* INPUTS */}
        <input
          className="auth-input"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="auth-input"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* REMEMBER ME */}
        <div className="remember-row">
          <div className="remember-toggle-row">
            <input
              className="react-switch-checkbox"
              id="remember-signup"
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label
              className="react-switch-label"
              htmlFor="remember-signup"
            >
              <span className="react-switch-button" />
            </label>
            <span>Remember me</span>
          </div>
        </div>

        {/* VERIFICATION TEXT */}
        <p
          style={{
            fontSize: "13px",
            color: "#9ca3af",
            marginBottom: "0px",
          }}
        >
          We’ll email a verification link to confirm your account.
        </p>

        {/* SIGN UP BUTTON */}
        <button className="auth-button">Sign Up</button>

        {/* FOOTER LINK */}
        <p className="auth-text">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
