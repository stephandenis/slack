import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { db } from "./firebase";
import firebase from "firebase";
const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Stephan Denis",
      userImage: null,
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
