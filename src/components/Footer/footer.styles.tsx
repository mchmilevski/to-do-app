import styled from "styled-components";
import {
  textColor,
  brightblue,
  hoverFooterText,
} from "../../styles/themeStyles";

export const FooterContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "JosefinSans-Bold";
  font-size: 14px;
  color: ${textColor};
`;

type FilterTextProps = {
  active: boolean;
};

export const FilterText = styled.span<FilterTextProps>`
  cursor: pointer;
  color: ${({ active }) => active && brightblue};
  &:hover {
    color: ${({ active }) => (active ? brightblue : hoverFooterText)};
  }
`;

export const ActiveButton = styled(FilterText)`
  padding: 0 10px;
`;

export const ClearCompleted = styled.div`
  cursor: pointer;
  &:hover {
    color: ${hoverFooterText};
  }
`;
