import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin,
        gitHubLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const destination = location?.state ? location.state : '/';
    const handleSocialMedialLogin = (SocialProvider) => {
        SocialProvider()
            .then(result => {
                if (result.user) {
                    navigate(destination)
                }
            })
    }
    return (
        <div className="grid grid-cols-1 gap-3 mx-5">



            <button
                onClick={() => handleSocialMedialLogin(googleLogin)}
                className="btn   btn-outline "
            >
                Login with  Google <img className="h-8 w-8 rounded-lg" src="/google.png" alt="" />
            </button>
            <button
                onClick={() => handleSocialMedialLogin(gitHubLogin)}
                className="btn btn-outline "
            >
                Login with   Github <img className="h-8 w-8 rounded-lg" src="/github.png" alt="" />
            </button>
        </div>

    );
};

export default SocialLogin;