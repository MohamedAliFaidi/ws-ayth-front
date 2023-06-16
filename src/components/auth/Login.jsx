import {useState,useEffect,useCallback} from "react";
import { useUserStore } from "../../utils/store";
import "./auth.css";
import { validateEmail,validatePasword } from "../../utils/form.validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [setUserId, setmail] = useUserStore((state) => [
    state.setUserId,
    state.setEmail,
  ]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("email", email);
      console.log("password", password);
      fetch("http://localhost:8080/auth/login", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then(async (res) => {
         await res.json();
          }).then((data) => {
            console.log(data);
            setUserId(data.userId);
            setmail(data.email);
          })
    
    },[])


  const verifyAndSetEmail = useCallback(
    (e) => {
      if (!validateEmail(e.currentTarget.value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      setEmail(e.currentTarget.value);
    },
    [setEmailError, setEmail]
  );

  const verifyAndSetPassword = useCallback(
    (e) => {
      if (!validatePasword(e.currentTarget.value)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
      setPassword(e.currentTarget.value);
    },
    [, setPassword]
  );

  useEffect(() => {
    if (emailError || passwordError) setIsDisabled(true);
    else setIsDisabled(false);
  }, [passwordError, emailError]);

  return <div><form onSubmit={handleSubmit}>
  <input
    className="auth-input"
    type="text"
    name="email"
    value={email}
    placeholder="email"
    onChange={verifyAndSetEmail}
    required={true}
  />
  {emailError && (
    <span className="error-message animate__animated animate__fadeInUp">
      Enter a valid email
    </span>
  )}
  <input
    className="auth-input"
    type="password"
    name="password"
    value={password}
    placeholder="password"
    onChange={verifyAndSetPassword}
    required={true}
  />
  {passwordError && (
    <span className="error-message animate__animated animate__fadeInUp">
      {passwordError}
    </span>
  )}
  <button
    type="submit"
    disabled={isDisabled}
    className="auth-button"
  >
    Login
  </button>
</form></div>;
};

export default Login;
