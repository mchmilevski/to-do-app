import styled from "styled-components";
import { todoBackgroundColor } from "../../styles/themeStyles";

export const ListContainer = styled.div`
  margin-top: 20px;
  background-color: ${todoBackgroundColor};
  width: 100%;
  border-radius: 5px;
  box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -4px 4px 36px 2px rgba(0, 0, 0, 0.16);
`;
