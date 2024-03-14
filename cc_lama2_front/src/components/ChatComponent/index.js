import styled from "styled-components";
import { FaUser, FaKiwiBird } from "react-icons/fa";

export default function ChatComponent({ chat }) {
  return (
    <Container chat={chat}>
      {chat.from === "user" ? <FaUser /> : <FaKiwiBird />}
      <Chat>{chat.message}</Chat>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.chat.from === "user" ? "#FFFFFF" : "#F7F7F8"};
  padding: 50px 20px;
  border-bottom: 1px solid #d1d5dd;
`;
const Chat = styled.div`
  width: 100%;
  margin-left: 30px;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 200;
`;
