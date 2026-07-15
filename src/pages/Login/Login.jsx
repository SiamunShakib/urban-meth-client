import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;



    loginUser(email, password)
      .then((result) => {
        console.log("✅ Login Successful!");
        console.log("=====================================");
        console.log("Firebase User:", result.user);
        console.log("🆔 UID:", result.user.uid);
        console.log("👤 Name:", result.user.displayName);
        console.log("📧 Email:", result.user.email);
        console.log("📱 Email Verified:", result.user.emailVerified);
        console.log("🖼️ Photo URL:", result.user.photoURL);
        console.log("=====================================");

        form.reset();
      })
      .catch((error) => {
        console.error("❌ Login Failed");
        console.error("=====================================");
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        console.error("=====================================");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">
              Login to Your Account
            </h1>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Enter your email"
                  required
                />
              </fieldset>

              {/* Password */}
              <fieldset className="fieldset">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Enter your password"
                  required
                />
              </fieldset>

              <button type="submit" className="btn btn-primary w-full mt-6">
                Login
              </button>
            </form>
            <SocialLogin/>
            <div className="divider">OR</div>

            <Link to="/register">
              <button className="btn btn-outline btn-secondary w-full">
                Create a New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;