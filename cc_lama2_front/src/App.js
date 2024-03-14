import styled from "styled-components";
import React, { useState } from "react";
import RequisitionComponent from "./components/RequisitionComponent/index.js";
import ChatComponent from "./components/ChatComponent/index.js";

export default function App() {
  const [chatContext, setChatContext] = useState([]);

  return (
    <Container>
      <ChatView>
        {chatContext.map((chat) => (
          <ChatComponent chat={chat} />
        ))}
      </ChatView>

      <RequisitionComponent
        chatContext={chatContext}
        setChatContext={setChatContext}
      />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: initial;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`;

const ChatView = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
