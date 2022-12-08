import styled from "styled-components";
import {
  backgroundColor,
  textColor,
  todoBackgroundColor,
  activeToDoTextColor,
} from "./themeStyles";

export const AppContainer = styled.div`
  background-color: ${backgroundColor};
  height: 100vh;
`;

type BackgroundImageProps = {
  imageUrl: string;
};
export const BackgroundImage = styled.div<BackgroundImageProps>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100% 300px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Container = styled.div`
  padding-top: 90px;
  margin: 0px auto 0;
  width: 63%;
  @media screen and (max-width: 650px) {
    width: 90%;
  }
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
  letter-spacing: 10px;
  @media screen and (max-width: 650px) {
    font-size: 35px;
  }
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
  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
  `;

export const DragAndDropInfoText = styled.div`
  color: ${textColor};
  text-align: center;
  width: 100%;
  margin-top: 40px;
`;
