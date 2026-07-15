import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>google sign in</button>
    </div>
  );
};

export default SocialLogin;
