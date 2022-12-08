import { FiltersContainer, FilterText, ActiveButton } from "./filters.styles";
import { FilterType, updateFilters } from "../../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Filters = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  const toggleAllFilter = () => {
    dispatch(updateFilters(FilterType.AllTodos));
  };

  const toggleActiveFilter = () => {
    dispatch(updateFilters(FilterType.ActiveTodos));
  };

  const toggleCompletedFilter = () => {
    dispatch(updateFilters(FilterType.CompletedTodos));
  };

  return (
    <FiltersContainer>
      <FilterText
        onClick={toggleAllFilter}
        active={selectedFilter === FilterType.AllTodos}
      >
        All
      </FilterText>
      <ActiveButton
        onClick={toggleActiveFilter}
        active={selectedFilter === FilterType.ActiveTodos}
      >
        Active
      </ActiveButton>
      <FilterText
        onClick={toggleCompletedFilter}
        active={selectedFilter === FilterType.CompletedTodos}
      >
        Completed
      </FilterText>
    </FiltersContainer>
  );
};

export default Filters;
