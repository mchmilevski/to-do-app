import styled from "styled-components";
import {
  textColor,
  todoBackgroundColor,
  activeToDoTextColor,
} from "../../styles/themeStyles";

export const Container = styled.div`
  padding-top: 90px;
  margin: 0px auto 0;
  width: 63%;
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
  width: 100%;
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
  box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
`;

export const DragAndDropInfoText = styled.div`
  color: ${textColor};
  text-align: center;
  width: 100%;
  margin-top: 50px;
`;