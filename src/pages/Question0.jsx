import React, { useState } from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import ButtonF from "./ButtonF";
import styled from "styled-components";
import NextBtn from "./NextBtn";
import "./Test.css";
const ButtonBox = styled.div`
  display: flex;
  padding: 20px 22px;
  padding-bottom: 28px;
  overflow-y: auto;
  margin: auto;
  text-align: center;
  align-items: center;
  width: 55%;
`;

async function getQuestions() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/questions"
  );
  return JSON.parse(response.data.body);
}

function Question0() {
  let arr = [];
  const [score, setScore] = useState([0, 0, 0, 0]);
  const [testscore, setTestscore] = useState(0);
  const getScore = (i, v) => {
    const tmp = score;
    tmp[i] = v;
    setScore(tmp);
    console.log(score);
    const sum = score.reduce((prev, curr) => prev + curr);
    console.log(sum);
    setTestscore(sum);
  };

  const [state, refetch] = useAsync(getQuestions, []);

  const { loading, data: questions, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>${error}</div>;
  if (!questions) return null;

  questions
    .filter((id) => id.question_id === "0")
    .map((question) => (arr = question.question_list));

  return (
    <>
      {/* 0번질문 네가지 */}
      <ul>
        {arr.map((v, i) => {
          return (
            <li>
              {arr[i]}
              <ButtonBox>
                <span>아니다</span>
                <ButtonF idx={i} getScore={getScore} />
                <span>그렇다</span>
              </ButtonBox>
            </li>
          );
        })}
      </ul>
      <NextBtn
        score={testscore}
        criteria={15}
        choice1="/Question1"
        choice2="/Question2"
      />
    </>
  );
}

export default Question0;
