import React from "react";
import "../styles/SignInPage.css";

export default function SignInPage() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign in</h2>
        <p className="signin-subtitle">
          Please login to continue to your account.
        </p>

        <form className="signin-form">
          {/* Email */}
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          {/* Password */}
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          {/* Remember Me */}
          <div className="signin-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Keep me logged in</label>
          </div>

          {/* Submit */}
          <button type="submit" className="signin-btn">
            Sign in
          </button>

          <div className="divider">or</div>

          {/* Google Login */}
          <button type="button" className="google-btn">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
            />
            Sign in with Google
          </button>
        </form>

        <p className="signin-footer">
          Need an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
}
