import SignUpForm from "../../components/SignUp/SignUpForm";
import SignInForm from "../../components/SignIn/SignInForm";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
