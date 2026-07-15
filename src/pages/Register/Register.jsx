import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(async (result) => {
        console.log("firebase result:", result);

        await updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        const userData = {
          uid: result.user.uid,
          name: name,
          email: email,
          photoURL: photo,
          role: "user",
          createdAt: serverTimestamp(),
        };
        console.log("saving", userData);

        try {
          await setDoc(doc(db, "users", result.user.uid), userData);
        } catch (error) {
          console.error("🔥 Firestore Error:", error);
        }
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          title: "Registration Successful!",
          text: "You have been Signing Up successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("❌ Registration Failed");
        console.error("Error Code:", error.code);
        Swal.fire({
          title: "Registration Failed!",
          text: "Something went wrong while Sign Up.",
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
              Create an Account
            </h1>

            <form onSubmit={handleRegister}>
              {/* Name */}
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Your Name"
                  required
                />
              </fieldset>

              {/* Photo URL */}
              <fieldset className="fieldset">
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="Photo URL"
                  required
                />
              </fieldset>

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
                Register
              </button>
            </form>
            <div className="divider">OR</div>

            <Link to="/login">
              <button className="btn btn-outline btn-secondary w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
