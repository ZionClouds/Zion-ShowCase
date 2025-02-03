import { AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import LoginBg from '../assets/images/ZionAi-Virtual-Meeting-Background-V2-01.png';
import Logo from '../assets/images/Logo_gradient.png';
import '../App.css';

function Login() {

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  // const { login, logout, auth } = useAuth();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: 'create',
      })
      .catch((error) => {
        console.error('Login error:', error);
        //   logout();
      });
  };

  return (
    <div className='login-page d-flex align-items-center justify-content-center'>
      <div className='login-card'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-center flex-column align-items-center'>
              <div className='logo-img'>
                <img src={Logo} alt='logo' />
              </div>
              <div className='mb-4 welcome-text'>Welcome to the ZionAI Demo Hub</div>
              <button className="login-btn" onClick={handleRedirect}>
                <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="17" y="17" width="10" height="10" fill="#FEBA08"></rect>
                  <rect x="5" y="17" width="10" height="10" fill="#05A6F0"></rect>
                  <rect x="17" y="5" width="10" height="10" fill="#80BC06"></rect>
                  <rect x="5" y="5" width="10" height="10" fill="#F25325"></rect>
                </svg>
                <span>Sign in with Microsoft</span>
              </button>
            </div>
            {/* <div className='col-md-6'>
                        <div className='img-bg'>
                          <img src={LoginBg} alt='bg' />
                        </div>
                      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;