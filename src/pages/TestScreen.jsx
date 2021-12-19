import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Question0 from "./Question0";
import "./Test.css";

// import ChildMap from "../lib/ChildMap";

let arr_T = [];
let arr_F = [];
let res = [];
function TestScreen() {
  const [number, setNumber] = useState(0);

  const [questions, setquestions] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchquestions = async () => {
      try {
        seterror(null);
        setquestions(null);
        setloading(true);

        const response = await axios.get(
          "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/questions"
        );
        // console.log(response);

        let p_response = JSON.parse(response.data.body);
        for (let i = 0; i < p_response.length; i++) {
          if (p_response[i].answer) arr_T.push(p_response[i]);
          else arr_F.push(p_response[i]);
        }
        console.log(arr_T);
        console.log(arr_F);

        setquestions(p_response);
        console.log("전체 parse response는" + JSON.stringify(p_response));
      } catch (error) {
        console.log(error);
        seterror(error);
      }
      setloading(false);
    };

    fetchquestions();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>${error}</div>;
  if (!questions) return null;
  // console.log(questions);

  // console.log(arr_F[1].criteria);

  return (
    <>
      <Header />

      <div className="test-board">
        <p id="head">NBTI Test화면입니다</p>
        <div className="question-block-F">
          <Question0 />
        </div>
        {/* {(() => {
          switch (number) {
            case 0:
              return (
                <div className="question-block-F">
                  <Question0 />
                </div>
              );
            case 1:
              return (
                <div className="question-block-F">
                  <Question1 />
                </div>
              );
          }
        })()} */}
      </div>
    </>
  );
}

export default TestScreen;
