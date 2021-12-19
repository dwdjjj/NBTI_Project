import React, { useState } from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import "./Test.css";
import ButtonT from "./ButtonT";
import Header from "../Header";
import ResScreen from "./ResScreen";
async function getQuestions() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/questions"
  );
  return JSON.parse(response.data.body);
}

function Question2() {
  const [state, refetch] = useAsync(getQuestions, []);

  // const [res, setRes] = useState(false);
  // const getRes = () => {
  //   res ? setRes(false) : setRes(true);
  //   if (res) {
  //     // res값에 따라서 res화면 컴포넌트 보여주거나 가려서
  //     // 결과창페이지로 넘어가는게 아니라 결과창을 바로 보여주면
  //     // 결과 넘겨주기 수월함.
  //   }
  // };

  const { loading, data: questions, error } = state;

  if (loading)
    return (
      <div>
        <span>로딩중..</span>
      </div>
    );
  if (error) return <div>${error}</div>;
  if (!questions) return null;

  let arr = [];
  questions
    .filter((id) => id.question_id === "2")
    .map((question) => (arr = question.answer_list));
  let q = "";
  questions
    .filter((id) => id.question_id === "2")
    .map((question) => (q = question.question));

  let arr_s = [];
  questions
    .filter((id) => id.question_id === "2")
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
                  {arr[i]}에 취업하고 싶으시면
                  <ButtonT to={arr_s[i]} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="res">
        <ResScreen />
      </div>
    </>
  );
}

export default Question2;
