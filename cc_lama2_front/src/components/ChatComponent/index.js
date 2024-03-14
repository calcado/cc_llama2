import styled from "styled-components";
import { FaUser, FaKiwiBird } from "react-icons/fa";
import { Comment } from "react-loader-spinner";

export default function ChatComponent({ chat }) {
  return (
    <Container chat={chat}>
      {chat.from === "user" ? <FaUser size={25} /> : <FaKiwiBird size={25} />}

      <Chat>
        {chat.message ? (
          chat.message
        ) : (
          <Comment
            visible={true}
            height="50"
            width="50"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="grey"
          />
        )}
      </Chat>
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
