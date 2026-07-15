import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          title: "Login Successful!",
          text: "You have been Logged in successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("❌ Login Failed");
        console.error("Error Code:", error.code);
        Swal.fire({
          title: "Login Failed!",
          text: "Something went wrong while Login.",
          icon: "error",
        });
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
            <SocialLogin />
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
