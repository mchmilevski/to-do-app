import styled from "styled-components";
import { textColor, hoverFooterText } from "../../styles/themeStyles";

export const FooterContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "JosefinSans-Bold";
  font-size: 14px;
  color: ${textColor};
`;

export const ClearCompleted = styled.div`
  cursor: pointer;
  &:hover {
    color: ${hoverFooterText};
  }
`;
