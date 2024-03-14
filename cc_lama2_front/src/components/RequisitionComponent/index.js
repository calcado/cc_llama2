import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";

export default function RequisitionComponent({ chatContext, setChatContext }) {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = process.env.REACT_APP_API_BASE_URL;

  function pressEnter(event) {
    if (event.key === "Enter") {
      research();
    }
  }

  function research() {
    if (loading === true) {
      return;
    }
    setLoading(true);
    const newArr = [...chatContext, { from: "user", message: question }];
    setChatContext(newArr);
    setQuestion("");

    const promisse = axios.post(`${url}prompt`, {
      body: question,
    });

    promisse.then((response) => {
      setLoading(false);
      const updateArr = [
        ...newArr,
        { from: "bot", message: response.data.body },
      ];

      setChatContext(updateArr);
    });

    promisse.catch((error) => {
      setLoading(false);
      console.log(error);
    });
  }

  return (
    <Question>
      <UserInput
        disabled={loading}
        value={question}
        placeholder="pesquisa"
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={pressEnter}
      />
      <button onClick={research} disabled={loading}>
        <FaRegPaperPlane />
      </button>
    </Question>
  );
}

const Question = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: 20px;
  border: 3px solid #ffffff;
  background-color: #ffffff;
  width: 100vw;
`;
const UserInput = styled.input`
  justify-content: initial;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0px 5px;
  margin-right: 15px;
  border-radius: 10px;
  border: 2px solid #d1d5dd;
`;
