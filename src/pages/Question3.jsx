import React, { useState } from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import ButtonF from "./ButtonF";
import styled from "styled-components";
import Header from "../Header";
import "./Test.css";
import NextBtn from "./NextBtn";
import computer_bg from "../images/bg-computer.jpg";
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

function Question1() {
  let arr = [];
  const [score, setScore] = useState([0, 0, 0, 0, 0]);
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
    .filter((id) => id.question_id === "3")
    .map((question) => (arr = question.question_list));

  return (
    <>
      <Header />
      {/* 3번질문 5가지 */}

      <div className="test-board">
        {/* <img src={computer_bg} alt="로딩이미지" /> */}
        <p id="head">NBTI Test화면입니다</p>
        <div className="question-block-F">
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
            criteria={17}
            choice1="/Question6"
            choice2="/Question7"
          />
        </div>
      </div>
    </>
  );
}

export default Question1;
