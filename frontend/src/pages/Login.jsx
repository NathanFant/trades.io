import LoginForm from "../components/LoginComponent";
import CreateUser from "../components/CreateComponent";
import { useLogin } from "../context/LoginContext";

export default function Login() {
  const { signUp, handleSignClick } = useLogin();

  return (
    <>
    {signUp ?
    <CreateUser signUp={signUp} handleSignClick={handleSignClick} />
     :
    <LoginForm  signUp={signUp} handleSignClick={handleSignClick} />}
    </>
  );
}
