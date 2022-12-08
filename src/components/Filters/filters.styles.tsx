import styled from "styled-components";
import {
  textColor,
  brightblue,
  hoverFooterText,
  todoBackgroundColor,
} from "../../styles/themeStyles";

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 650px) {
    background-color: ${todoBackgroundColor};
    margin-top: 20px;
    border-radius: 5px;
    padding: 20px 20px;
    justify-content: center;
    color: ${textColor};
    font-size: 14px;
    box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
    -webkit-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  }
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
  font-family: "JosefinSans-Bold";
`;

export const ActiveButton = styled(FilterText)`
font-family: "JosefinSans-Bold";
  padding: 0 10px;
  @media screen and (max-width: 650px) {
    padding: 0 20px;
  }
`;
