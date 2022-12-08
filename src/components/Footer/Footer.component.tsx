import { useMediaQuery } from "react-responsive";
import { FooterContainer, ClearCompleted } from "./footer.styles";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../../store/todoSlice";
import { RootState } from "../../store/store";
import React from "react";
import Filters from "../Filters/Filters.component";

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 650px)` });
  const dispatch = useDispatch();
  const activeTodos = useSelector((state: RootState) => state.todo.activeTodos);

  const toggleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const getItemsLeftCount = () =>
    activeTodos.reduce((sum, current) => {
      if (!current.completed) {
        sum += 1;
      }

      return sum;
    }, 0);

  return (
    <React.Fragment>
      <FooterContainer>
        <span>
          {getItemsLeftCount()} item{getItemsLeftCount() > 1 && "s"} left
        </span>
        {!isMobile && <Filters />}
        <ClearCompleted onClick={toggleClearCompleted}>
          Clear Completed
        </ClearCompleted>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
