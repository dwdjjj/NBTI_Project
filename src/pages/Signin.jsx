import * as React from "react";
import "./Signin.css";
import Header from "../Header";
import { Link } from "react-router-dom";
function Signin() {
  const Pstyle = {
    fontSize: "3em",
  };
  return (
    <>
      <Header />
      <form action="" class="loginForm">
        <a href="/">
          <p style={Pstyle}>NBTI</p>
        </a>
        <div class="input-box">
          <input id="username" type="text" placeholder="아이디" />
        </div>
        <div class="input-box">
          <input id="password" type="password" placeholder="비밀번호" />
        </div>
        <ul class="find_wrap">
          <li>
            <Link to="/Signup">
              <button id="signup">회원가입</button>
            </Link>
          </li>
          <li>
            <button id="forgot">아이디 찾기</button>
          </li>
          <li>
            <button id="forgot">비밀번호 찾기</button>
          </li>
        </ul>
        <Link to="/">
          <button type="submit">로그인</button>
        </Link>
      </form>
    </>
  );
}

export default Signin;
