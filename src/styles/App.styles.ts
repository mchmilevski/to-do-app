import styled from "styled-components";
import { backgroundColor } from "./themeStyles";

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
