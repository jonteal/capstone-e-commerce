import SignUpForm from '../../components/SignUp/SignUpForm';
import SignInForm from '../../components/SignIn/SignInForm';

import './authentication.scss';


const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;