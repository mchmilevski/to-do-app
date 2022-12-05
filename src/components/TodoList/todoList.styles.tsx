import styled from "styled-components";
import {
  brightblue,
  textColor,
  todoBackgroundColor,
  hoverFooterText,
} from "../../styles/themeStyles";

export const ListContainer = styled.div`
  margin-top: 20px;
  background-color: ${todoBackgroundColor};
  width: 700px;
  border-radius: 5px;
  box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
`;

export const Footer = styled.div`
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
    color: ${({active}) => active ? brightblue : hoverFooterText}
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
