import styled from "styled-components";
import {
  textColor,
  todoBackgroundColor,
  activeToDoTextColor,
} from "../../styles/themeStyles";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 90px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: white;
  font-size: 50px;
  font-family: "JosefinSans-Bold";
  letter-spacing: 5px;
`;

export const AddToDoInput = styled.input`
  background-color: ${todoBackgroundColor};
  border: none;
  height: 60px;
  width: 700px;
  border-radius: 5px;
  font-size: 18px;
  color: ${activeToDoTextColor};
  margin-top: 30px;
  padding-left: 15px;
  font-family: "JosefinSans-Regular";
  ::placeholder {
    color: ${textColor};
    font-family: "JosefinSans-Regular";
  }
  :focus {
    outline: none;
  }
`;
