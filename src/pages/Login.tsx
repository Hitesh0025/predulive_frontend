import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../auth.css";
import { loginUser } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async () => {
    setLoading(true);
    const res = await loginUser(email, password);
    setLoading(false);

    if (res.success) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", res.role);
      navigate("/TalentOnboarding");
;
    }
  };

  return (
    <div className="auth-wrapper">
      {/* TOP LEFT LOGO */}
      <div className="auth-logo">
        <img src="/logo.svg" alt="Predulive logo" />
      </div>

      {/* TOP RIGHT LINKS */}
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


      {/* GREEN BACKGROUND TEXT */}
      <div className="auth-hero">
        <h2 className="auth-hero-title">Welcome!</h2>
        <p className="auth-hero-subtitle">Sign‑In as a Talent</p>
        <p className="auth-hero-desc">
          Build proof‑of‑work and get matched.
        </p>
      </div>

      {/* WHITE CARD */}
      <div className="auth-card">
        <h3 className="sign-in-title">Sign In With</h3>

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

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember-row">
          <span className="forgot-link">
            Forgot password? <span className="reset-link">Reset</span>
          </span>

          <div className="remember-toggle-row">
            <input
              className="react-switch-checkbox"
              id="remember-switch"
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label className="react-switch-label" htmlFor="remember-switch">
              <span className="react-switch-button" />
            </label>
            <span>Remember me</span>
          </div>
        </div>

        <button
          className="auth-button"
          disabled={!email || !password || loading}
          onClick={handleLogin}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="auth-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
