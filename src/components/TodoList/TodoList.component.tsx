import React, { useEffect, useState } from "react";
import "./todoList.styles.tsx";
import TodoRow from "../TodoRow/TodoRow.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateFilters,
  reorderTodoList,
  Filters,
  ToDoItem,
} from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { ListContainer } from "./todoList.styles";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Footer from "../Footer/Footer.component";

const TodoList = () => {
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState<ToDoItem[]>([]);

  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  useEffect(() => {
    setFilteredList([...todoList]);
  }, [todoList]);

  useEffect(() => {
    if (selectedFilter) {
      if (Filters.AllTodos) {
        toggleAllFilter();
      } else if (Filters.ActiveTodos) {
        toggleActiveFilter();
      } else {
        toggleCompletedFilter();
      }
    }
  }, []);

  const toggleAllFilter = () => {
    dispatch(updateFilters(Filters.AllTodos));
    setFilteredList([...todoList]);
  };

  const toggleActiveFilter = () => {
    dispatch(updateFilters(Filters.ActiveTodos));
    const incompletedList = todoList.filter((todo) => !todo.completed);
    setFilteredList([...incompletedList]);
  };

  const toggleCompletedFilter = () => {
    dispatch(updateFilters(Filters.CompletedTodos));
    const completedList = todoList.filter((todo) => todo.completed);
    setFilteredList([...completedList]);
  };

  const reorder = (
    list: ToDoItem[],
    startIndex: number,
    endIndex: number
  ): ToDoItem[] => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    return list;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedList: ToDoItem[] = reorder(
      filteredList,
      result.source.index,
      result.destination.index
    );

    dispatch(reorderTodoList(reorderedList));
  };

  const List = React.memo(() => {
    return (
      <React.Fragment>
        {filteredList.map((item: ToDoItem, index: number) => (
          <Draggable draggableId={String(item.id)} index={index} key={item.id}>
            {(provided) => (
              <TodoRow
                provided={provided}
                innerRef={provided.innerRef}
                todo={item}
                key={index}
              />
            )}
          </Draggable>
        ))}
      </React.Fragment>
    );
  });

  return (
    <ListContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <List />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Footer
        toggleCompletedFilter={toggleCompletedFilter}
        toggleActiveFilter={toggleActiveFilter}
        toggleAllFilter={toggleAllFilter}
      />
    </ListContainer>
  );
};

export default TodoList;
