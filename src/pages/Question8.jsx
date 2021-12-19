import React, { useState } from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import "./Test.css";
import ButtonT from "./ButtonT";

import Header from "../Header";

async function getQuestions() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/questions"
  );
  return JSON.parse(response.data.body);
}

function Question2() {
  const [state, refetch] = useAsync(getQuestions, []);

  const { loading, data: questions, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>${error}</div>;
  if (!questions) return null;

  let arr = [];
  questions
    .filter((id) => id.question_id === "8")
    .map((question) => (arr = question.answer_list));
  let q = "";
  questions
    .filter((id) => id.question_id === "8")
    .map((question) => (q = question.question));

  let arr_s = [];
  questions
    .filter((id) => id.question_id === "8")
    .map((question) => (arr_s = question.success_list));

  return (
    <>
      <Header />

      <div className="test-board">
        <p id="head">NBTI Test화면입니다</p>
        <div className="question-block-F">
          <ul>
            <p>{q}</p>
            {arr.map((v, i) => {
              return (
                <li>
                  {arr[i]}
                  <ButtonT to={arr_s[i]} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Question2;
