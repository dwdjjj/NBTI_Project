import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 26px;
  border: 1px solid #38d9a9;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 5px;
  cursor: pointer;
  background: ${(props) => (props.color ? "props.color" : "#38d9a9")};
`;
const ButtonToggle = styled(Button)`
  opacity: 0.5;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transition: .5s;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const type = [1, 2, 3, 4, 5];

function ButtonF({ idx, getScore }) {
  const [active, setActive] = useState(null);
  // const [ans, setAns] = useState(0);

  // const Increase = (active) => {
  //   setAns(ans + active);
  // };

  return (
    <ButtonGroup>
      {type.map((sc) => (
        <ButtonToggle
          key={sc}
          active={active === sc}
          onClick={() => {
            setActive(sc);
            // Increase(sc);
            console.log(sc);
            getScore(idx, sc);
            // console.log(ans);
          }}
        ></ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ButtonF;
