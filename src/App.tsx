import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import TestScreen from "./pages/TestScreen";
import { createGlobalStyle } from "styled-components";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Question6 from "./pages/Question6";
import Question7 from "./pages/Question7";
import Question8 from "./pages/Question8";
import ResScreen from "./pages/ResScreen";
import Carrer13 from "./Careers/Career13";
import Carrer12 from "./Careers/Career12";
import Carrer11 from "./Careers/Career11";
import Carrer10 from "./Careers/Career10";
import Carrer9 from "./Careers/Career9";
import Carrer8 from "./Careers/Career8";
import Carrer7 from "./Careers/Career7";
import Carrer6 from "./Careers/Career6";
import Carrer5 from "./Careers/Career5";
import Carrer4 from "./Careers/Career4";
import Carrer3 from "./Careers/Career3";
import Carrer2 from "./Careers/Career2";
import Carrer1 from "./Careers/Career1";
import Carrer0 from "./Careers/Career0";
// const isLogin = false;
const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Career0" component={Carrer0} />
          <Route exact path="/Career1" component={Carrer1} />
          <Route exact path="/Career2" component={Carrer2} />
          <Route exact path="/Career3" component={Carrer3} />
          <Route exact path="/Career4" component={Carrer4} />
          <Route exact path="/Career5" component={Carrer5} />
          <Route exact path="/Career6" component={Carrer6} />
          <Route exact path="/Career7" component={Carrer7} />
          <Route exact path="/Career8" component={Carrer8} />
          <Route exact path="/Career9" component={Carrer9} />
          <Route exact path="/Career10" component={Carrer10} />
          <Route exact path="/Career11" component={Carrer11} />
          <Route exact path="/Career12" component={Carrer12} />
          <Route exact path="/Career13" component={Carrer13} />

          <Route exact path="/ResScreen" component={ResScreen} />
          <Route exact path="/Question8" component={Question8} />
          <Route exact path="/Question7" component={Question7} />
          <Route exact path="/Question6" component={Question6} />
          <Route exact path="/Question5" component={Question5} />
          <Route exact path="/Question4" component={Question4} />
          <Route exact path="/Question3" component={Question3} />
          <Route exact path="/Question2" component={Question2} />
          <Route exact path="/Question1" component={Question1} />
          <Route exact path="/TestScreen" component={TestScreen} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/video-background" component={Homepage} />
          <Route exact path="/" component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
