
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>google sign in</button>
        </div>
    );
};

export default SocialLogin;