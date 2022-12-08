import { FC, memo, Fragment } from "react";
import { ToDoItem, reorderList } from "../../store/todoSlice";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import TodoRow from "../TodoRow/TodoRow.component";
import { useDispatch } from "react-redux";

interface DragDropListProps {
  todosList: ToDoItem[];
  listName: string;
}

const DragDropList: FC<DragDropListProps> = ({ todosList, listName }) => {
  const dispatch = useDispatch();

  const List: FC<{ list: ToDoItem[] }> = memo(({ list }) => {
    return (
      <Fragment>
        {list.map((item: ToDoItem, index: number) => (
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
      </Fragment>
    );
  });

  const reorder = (
    list: ToDoItem[],
    startIndex: number,
    endIndex: number
  ): ToDoItem[] => {
    const copy = [...list];
    const [removed] = copy.splice(startIndex, 1);
    copy.splice(endIndex, 0, removed);
    return copy;
  };

  const onDragEnd = (result: DropResult, list: ToDoItem[]) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedList: ToDoItem[] = reorder(
      list,
      result.source.index,
      result.destination.index
    );

    dispatch(
      reorderList({
        reorderedList: reorderedList,
        list: result.source.droppableId,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, todosList)}>
      <Droppable droppableId={listName}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <List list={todosList} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropList;
