import {
  FooterContainer,
  FilterText,
  ActiveButton,
  ClearCompleted,
} from "./footer.styles";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted, Filters } from "../../store/todoSlice";
import { RootState } from "../../store/store";

interface FooterProps {
  toggleAllFilter: () => void;
  toggleActiveFilter: () => void;
  toggleCompletedFilter: () => void;
}
const Footer: React.FC<FooterProps> = ({
  toggleAllFilter,
  toggleActiveFilter,
  toggleCompletedFilter,
}) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  const toggleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const getItemsLeftCount = () =>
    todoList.reduce((sum, current) => {
      if (!current.completed) {
        sum += 1;
      }

      return sum;
    }, 0);

  return (
    <FooterContainer>
      <span>{getItemsLeftCount()} items left</span>
      <div>
        <FilterText
          onClick={toggleAllFilter}
          active={selectedFilter === Filters.AllTodos}
        >
          All
        </FilterText>
        <ActiveButton
          onClick={toggleActiveFilter}
          active={selectedFilter === Filters.ActiveTodos}
        >
          Active
        </ActiveButton>
        <FilterText
          onClick={toggleCompletedFilter}
          active={selectedFilter === Filters.CompletedTodos}
        >
          Completed
        </FilterText>
      </div>
      <ClearCompleted onClick={toggleClearCompleted}>
        Clear Completed
      </ClearCompleted>
    </FooterContainer>
  );
};

export default Footer;
