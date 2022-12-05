import styled from "styled-components";
import {
  borderColor,
  checkboxBorderColor,
  textColor,
  checkboxBackgroundColor,
  todoBackgroundColor
} from "../../styles/themeStyles";

export const ToDoContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid ${borderColor};
  padding: 20px 20px;
  width: 100%;
`;

type CheckboxProps = {
  checked: boolean;
};

export const Checkbox = styled.input<CheckboxProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  border-radius: 50px;
  height: 20px;
  border: 1px solid ${checkboxBorderColor};
  outline: none;
  cursor: pointer;
  position: ${({ checked }) => checked && "relative"};
  background: ${({ checked }) => checked && checkboxBackgroundColor};
  ${({ checked }) =>
    checked &&
    `
    ::before {
      content: "\\2713";
      font-size: 1em;
      color: #fff;
      position: absolute;
      right: 4px;
      top: 0px;
    }
    `}
`;

export const InputAndRemoveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ToDoTextProps = {
  completed: boolean;
};

export const ToDoText = styled.span<ToDoTextProps>`
  color: ${textColor};
  padding-left: 10px;
  font-size: 18px;
  text-decoration: ${({ completed }) => completed && "line-through"};
`;

export const EditInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${todoBackgroundColor};
  width: 100%;
  border: none;
  color: ${textColor};
  font-size: 18px;
  font-family: "JosefinSans-Regular";
  outline: none;
  padding-left: 10px;
`;