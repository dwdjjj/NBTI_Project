import styled from "styled-components";

const MyButton = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: ${(props) => (props.danger ? "#e74c37" : "2ecc71")};
  &:active,
  &:foucus {
    outline: none;
  }
`;

export default MyButton;
