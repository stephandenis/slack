import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "./firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <InputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hiden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </InputContainer>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  border-radius: 20px;
  form {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 40px;
  }

  input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    outline: none;
    border: 1px solid gray;
    border-radius: 1rem;
    padding: 20px;
  }

  button {
    display: none !important;
  }
`;
