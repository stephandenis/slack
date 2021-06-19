import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <InnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="logo"
        />
        <h1>Sign in</h1>
        <p>by deni</p>

        <Button onClick={signIn}>Sign In with Google</Button>
      </InnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

const InnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
