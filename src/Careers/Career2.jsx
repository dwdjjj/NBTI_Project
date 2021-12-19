import React, { useState } from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import "../pages/Test.css";
import Card from "./Card";
import Header from "../Header";
import Link from "react-router-dom";

async function getCareers() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/careers"
  );
  return JSON.parse(response.data.body);
}

export default function Carrer2() {
  const [state, refetch] = useAsync(getCareers, []);
  const [text1, setText1] = useState("");
  const [text, setText] = useState("");

  const { loading, data: careers, error } = state;

  if (loading)
    return (
      <div>
        <span>로딩중..</span>
      </div>
    );
  if (error) return <div>${error}</div>;
  if (!careers) return null;

  console.log(state);
  let crr_link1 = [];
  let crr_link2 = [];
  let detail = "";
  careers
    .filter((id) => id.career_id === "2")
    .map((career) => (crr_link1 = career.career_youtube));
  console.log(crr_link1);
  careers
    .filter((id) => id.career_id === "2")
    .map((career) => (crr_link2 = career.career_blog));
  careers
    .filter((id) => id.career_id === "2")
    .map((career) => (detail = career.career_details));

  //유튜브post
  async function putData1(url) {
    try {
      //응답 성공
      const response = await axios.post(
        `https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/youtube/2/${url.replaceAll(
          "/",
          "$"
        )}`
      );
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  async function putData2(url) {
    try {
      //응답 성공
      const response = await axios.post(
        `https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/blog/2/${url.replaceAll(
          "/",
          "$"
        )}`
      );
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  const istyle = {
    marginLeft: "100px",
  };
  let name = "";
  careers
    .filter((id) => id.career_id === "2")
    .map((career) => (name = career.career_name));
  const hstyle = {
    fontSize: "3em",
    textAlign: "center",
  };
  console.log(careers);
  return (
    <>
      <div className="crr">
        <Header />
        <Card>
          <h1 style={hstyle}>{name}</h1>
        </Card>
        <Card>
          <p>{detail}</p>
        </Card>
        {crr_link1.map((i) => {
          return (
            <Card>
              <iframe
                width="560"
                height="315"
                src={i}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          );
        })}
        <div className="plus">
          <input
            style={istyle}
            type="text"
            placeholder="더 추가하고싶은 정보가 있으면 여기에 입력해주세요"
            value={text1}
            size={40}
            onChange={(e) => setText1(e.target.value)}
          />
          <button
            onClick={() => {
              putData1(text1);
              alert("추가되었습니다!");
              window.location.reload();
            }}
          >
            +
          </button>
        </div>
        <div className="blog-block">
          {crr_link2.map((blog, i) => {
            return (
              <Card>
                <span> {i + 1}번째 유익한 블로그 글 : </span>
                <a href={blog}> {blog}</a>
              </Card>
            );
          })}
          <div className="plus">
            <input
              style={istyle}
              type="text"
              placeholder="더 추가하고싶은 정보가 있으면 여기에 입력해주세요"
              value={text}
              size={40}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => {
                putData2(text);
                alert("추가되었습니다!");
                window.location.reload();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
