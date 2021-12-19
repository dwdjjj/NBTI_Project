import * as React from "react";
import "./Signin.css";
import Header from "../Header";
function Signin() {
  return (
    <>
      <Header />
      <form action="" class="loginForm">
        <a href="https://app.swaggerhub.com/apis/newdeal123/NBTI/1.0.3">
          <p>NBTI</p>
        </a>
        <div class="input-box">
          <input id="username" type="text" placeholder="아이디" />
        </div>
        <div class="input-box">
          <input id="password" type="password" placeholder="비밀번호" />
        </div>
        <ul class="find_wrap">
          <li>
            <button id="signup" onclick="location.href='Signup'">
              회원가입
            </button>
          </li>
          <li>
            <button id="forgot">아이디 찾기</button>
          </li>
          <li>
            <button id="forgot">비밀번호 찾기</button>
          </li>
        </ul>

        <button type="submit" href="/">
          로그인
        </button>
      </form>
    </>
  );
}

export default Signin;