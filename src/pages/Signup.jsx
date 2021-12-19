import * as React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function Signup() {
  return (
    <>
      <Header />
      <div class="register">
        <h3>회원가입</h3>
        <form action="">
          <div class="flex">
            <ul class="container">
              <li class="item center">이름</li>
              <li class="item">
                <input type="text" name="name" autofocus required />
              </li>
              <li class="item"></li>
            </ul>
            <ul class="container">
              <li class="item center">아이디</li>
              <li class="item">
                <input
                  type="text"
                  placeholder="아이디를 입력하세요."
                  required
                />
              </li>
              <li class="item">
                <button class="idcheck">중복확인</button>
              </li>
            </ul>
            <ul class="container">
              <li class="item center">비밀번호</li>
              <li class="item">
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  required
                />
              </li>
              <li class="item"></li>
            </ul>
            <ul class="container">
              <li class="item center">비밀번호 확인</li>
              <li class="item">
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  required
                />
              </li>
              <li class="item"></li>
            </ul>
            <ul class="container">
              <li class="item center">생년월일</li>
              <li class="item">
                <input type="date" required />
              </li>
              <li class="item"></li>
            </ul>

            <ul class="container">
              <li class="item center">전화번호</li>
              <li class="item">
                <input type="text" placeholder="휴대전화번호" />
              </li>
              <li class="item"></li>
            </ul>
            <ul class="container">
              <li class="item center"></li>
              <li class="item">
                <Link to="/">
                  <button type="submit" class="submit">
                    가입하기
                  </button>
                </Link>
              </li>
              <li class="item"></li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
